"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
// lib/my-stack.ts
const cdk = require("@aws-cdk/core");
// import * as cdk from '@aws-cdk-lib';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWItY2RrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicWItY2RrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtCQUFrQjtBQUNsQixxQ0FBcUM7QUFDckMsdUNBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1QywwQ0FBMEM7QUFFMUMsTUFBYSxPQUFRLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDcEMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QiwyQkFBMkI7UUFFM0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDdkQsSUFBSSxFQUFFLFFBQVE7WUFDZCxXQUFXLEVBQUUscUJBQXFCO1NBQ25DLENBQUMsQ0FBQztRQUVILE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUFkRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9teS1zdGFjay50c1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbi8vIGltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay1saWInO1xyXG4vLyBpbXBvcnQgKiBhcyBzMyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtczMnO1xyXG4vLyBpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNeVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgLy8gWW91ciBzdGFjayBkZWZpbml0aW9uLi4uXHJcblxyXG4gICAgY29uc3QgbXlQYXJhbWV0ZXIgPSBuZXcgY2RrLkNmblBhcmFtZXRlcih0aGlzLCAncWItY2RrJywge1xyXG4gICAgICB0eXBlOiAnU3RyaW5nJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdNeSBjdXN0b20gcGFyYW1ldGVyJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBhcmFtZXRlclZhbHVlID0gbXlQYXJhbWV0ZXIudmFsdWVBc1N0cmluZztcclxuICAgIGNvbnNvbGUubG9nKGBNeVBhcmFtZXRlciB2YWx1ZTogJHtwYXJhbWV0ZXJWYWx1ZX1gKTtcclxuICB9XHJcbn0iXX0=