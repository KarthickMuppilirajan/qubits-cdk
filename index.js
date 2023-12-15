"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
// lib/my-stack.ts
const cdk = require("@aws-cdk/core");
// import * as cdk from 'aws-cdk-lib';
// import * as s3 from 'aws-cdk-lib/aws-s3';
// import { Construct } from 'constructs';
class MyStack extends cdk.Stack {
    constructor(scope, id, props) {
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
exports.MyStack = MyStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrQkFBa0I7QUFDbEIscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0Qyw0Q0FBNEM7QUFDNUMsMENBQTBDO0FBRTFDLE1BQWEsT0FBUSxTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQ3BDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsMkJBQTJCO1FBRTNCLE1BQU0sV0FBVyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ3ZELElBQUksRUFBRSxRQUFRO1lBQ2QsV0FBVyxFQUFFLHFCQUFxQjtTQUNuQyxDQUFDLENBQUM7UUFFSCxNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUNGO0FBZEQsMEJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvbXktc3RhY2sudHNcbmltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG4vLyBpbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xuLy8gaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5cbmV4cG9ydCBjbGFzcyBNeVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFlvdXIgc3RhY2sgZGVmaW5pdGlvbi4uLlxuXG4gICAgY29uc3QgbXlQYXJhbWV0ZXIgPSBuZXcgY2RrLkNmblBhcmFtZXRlcih0aGlzLCAncWItY2RrJywge1xuICAgICAgdHlwZTogJ1N0cmluZycsXG4gICAgICBkZXNjcmlwdGlvbjogJ015IGN1c3RvbSBwYXJhbWV0ZXInLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcGFyYW1ldGVyVmFsdWUgPSBteVBhcmFtZXRlci52YWx1ZUFzU3RyaW5nO1xuICAgIGNvbnNvbGUubG9nKGBNeVBhcmFtZXRlciB2YWx1ZTogJHtwYXJhbWV0ZXJWYWx1ZX1gKTtcbiAgfVxufSJdfQ==