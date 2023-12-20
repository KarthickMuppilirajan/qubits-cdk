#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { QbS3Stack } from '../lib/QBS3Stack';

const app = new cdk.App();
new QBS3Stack(app, 'QbS3Stack');