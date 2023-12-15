// lib/my-stack.ts
// import * as cdk from '@aws-cdk/core';
import * as cdk from '@aws-cdk-lib';
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import { Construct } from 'constructs';

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Your stack definition...

    const myParameter = new cdk.CfnParameter(this, 'qb-cdk', {
      type: 'String',
      description: 'My custom parameter',
    });

    const parameterValue = myParameter.valueAsString;
    console.log(`MyParameter value: ${parameterValue}`);
  }
}