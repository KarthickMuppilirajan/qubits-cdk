import { Vpc, SubnetType, SecurityGroup, Peer, Port } from '@aws-cdk/aws-ec2';
import ecs = require('@aws-cdk/aws-ecs');
import ecs_patterns = require('@aws-cdk/aws-ecs-patterns');
import { CfnDBCluster, CfnDBInstance, CfnDBSubnetGroup } from '@aws-cdk/aws-rds';
import secretsManager = require('@aws-cdk/aws-secretsmanager');
import ssm = require('@aws-cdk/aws-ssm');
import * as cdk from '@aws-cdk/core';
import { Construct, Stack } from 'aws-cdk-lib';
// import * as s3 from '@aws-cdk/aws-s3';
// import type { CloudAssembly } from './cloud-assembly';
// import * as cdk from '@aws-cdk-lib';
// import * as iam from 'aws-cdk-lib/aws-iam';
// import * as kms from 'aws-cdk-lib/aws-kms';
// import { Construct } from 'constructs';

export class AwsCdkFargateRdsStackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const serviceName = 'qubits-staging-v3-service';
    const databaseName = 'moodle'
    const databaseUsername = 'pgadmin'
    //const databasePassword = 'Welcome123#'
    const stage = 'staging';
    // Your ECR repository and image details
    const ecrRepositoryName = 'qubits-cdk';
    const ecrImageName = 'public.ecr.aws/p1s2a9u0/hello-server:latest';

    const vpc = new Vpc(this, 'qubits-staging-v3-VPC', { 
      cidr: '10.0.0.0/16',
      subnetConfiguration: [ 
        { name: 'elb_public_', subnetType: SubnetType.PUBLIC },
        { name: 'ecs_private_', subnetType: SubnetType.PRIVATE },
        { name: 'aurora_isolated_', subnetType: SubnetType.ISOLATED }
      ]
    });
    const subnetIds: string[] = [];
    vpc.isolatedSubnets.forEach((subnet, index) => {
      subnetIds.push(subnet.subnetId);
    });

    const dbSubnetGroup: CfnDBSubnetGroup = new CfnDBSubnetGroup(this, 'AuroraSubnetGroup', {
      dbSubnetGroupDescription: 'Subnet group to access aurora',
      dbSubnetGroupName: 'aurora-serverless-subnet-group',
      subnetIds
    });

    const databaseCredentialsSecret = new secretsManager.Secret(this, 'DBCredentialsSecret', {
      secretName: `${serviceName}-${stage}-credentials`,
      generateSecretString: {
        secretStringTemplate: JSON.stringify({
          username: databaseUsername,
          password: 'Welcome123#',
        }),
        excludePunctuation: true,
        includeSpace: false,
        generateStringKey: 'password',
      }
    });

    new ssm.StringParameter(this, 'DBCredentialsArn', {
      parameterName: `${serviceName}-${stage}-credentials-arn`,
      stringValue: databaseCredentialsSecret.secretArn,
    });

    const dbClusterSecurityGroup = new SecurityGroup(this, 'DBClusterSecurityGroup', { vpc });
    const dbInstanceSecurityGroup = new SecurityGroup(this, 'DBInstanceSecurityGroup', { vpc });
    // A better security approach would be allow ingress from private subnet only
    // but I haven't been able to get the ipv4 cidr block of subnets in aws-cwk
    dbClusterSecurityGroup.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.tcp(5432));

    const dbConfig = {
      dbClusterIdentifier: `${serviceName}-${stage}-cluster`,
      engineMode: 'provisioned',
      engine: 'aurora-postgresql',
      engineVersion: '15.3',
      databaseName: databaseName,
      masterUsername: databaseCredentialsSecret.secretValueFromJson('username').toString(),
      masterUserPassword: databaseCredentialsSecret.secretValueFromJson('password').toString(),
      // Note: aurora serverless cluster can be accessed within its VPC only
      // https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html
      dbSubnetGroupName: dbSubnetGroup.dbSubnetGroupName,
      vpcSecurityGroupIds: [
        dbClusterSecurityGroup.securityGroupId
      ]
    };

    const rdsCluster = new CfnDBCluster(this, 'qubits-staging-v3-DBCluster', dbConfig);
    rdsCluster.addDependsOn(dbSubnetGroup)

    // Provisioned Aurora Instance
    const dbInstanceConfig = {
      dbClusterIdentifier: rdsCluster.ref,
      engine: 'aurora-postgresql',
      dbInstanceIdentifier: `${serviceName}-${stage}-instance`,
      dbInstanceClass: 'db.r5.large', // Choose an appropriate instance class
    };

    const rdsInstance = new CfnDBInstance(this, 'qubits-staging-v3-DBInstance', dbInstanceConfig);
    rdsInstance.addDependsOn(rdsCluster);
    
    //Add ingress rule for Aurora Instance's security group
    // const dbInstanceSecurityGroup = SecurityGroup.fromSecurityGroupId(this, 'DBInstanceSecurityGroup', rdsInstance.ref);
    dbInstanceSecurityGroup.addIngressRule(Peer.ipv4('10.0.0.0/16'), Port.tcp(5432), 'Allow inbound on port 5432');


    const cluster = new ecs.Cluster(this, 'Cluster', { 
      vpc,
     });

    const loadBalancedService = new ecs_patterns.ApplicationLoadBalancedFargateService(this, "FargateService", {
      cluster,
      taskImageOptions: {
        // image: ecs.ContainerImage.fromRegistry("karthickmuppilirajan:qbfrontend:latest"),
        containerName: 'qb-container',
        image: ecs.ContainerImage.fromRegistry(`public.ecr.aws/p1s2a9u0/hello-server:latest`), // Specify ECR image
        // image: ecs.ContainerImage.fromRegistry(`${ecrRepositoryName}/${ecrImageName}:latest`), // Specify ECR image
        containerPort: 3000,
        environment: {
          DATABASE_HOST: rdsCluster.attrEndpointAddress,
          DATABASE_NAME: databaseName,
          // TODO: use secret instead of environment
          DATABASE_USERNAME: databaseCredentialsSecret.secretValueFromJson('username').toString(),
          DATABASE_PASSWORD: databaseCredentialsSecret.secretValueFromJson('password').toString(),
        }
      },
    });
  }
}

