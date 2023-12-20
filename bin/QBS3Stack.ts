#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {QbS3Stack} from '../lib/QbS3Stack';

const app = new cdk.App();
new QbS3Stack(app, 'cdk-stack', {
  stackName: 'cdk-stack',
  env: {
    region: process.env.AWS_REGION,
  
  },
});