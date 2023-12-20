import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class QbS3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define an S3 bucket
    const myBucket = new s3.Bucket(this, 'MyBucket', {
      removalPolicy: cdk.RemovalPolicy.DESTROY, // This is just for the example, use appropriate removal policy
    });

    // Output the bucket name
    new cdk.CfnOutput(this, 'BucketName', {
      value: myBucket.bucketName,
    });
  }
}
