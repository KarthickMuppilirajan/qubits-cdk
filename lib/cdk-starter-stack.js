"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkStarterStack = void 0;
const ssm = __importStar(require("aws-cdk-lib/aws-ssm"));
const cdk = __importStar(require("aws-cdk-lib"));
class CdkStarterStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const emailParam = new ssm.StringParameter(this, 'alerts-email-param', {
            parameterName: '/my-site/alerts-email-dev',
            stringValue: 'dev-email@example.com',
            description: 'the email used for alerting for dev',
            type: ssm.ParameterType.STRING,
            tier: ssm.ParameterTier.STANDARD,
            allowedPattern: '.*',
        });
        const environmentsParam = new ssm.StringListParameter(this, 'environments-param', {
            parameterName: '/qubits/environments',
            stringListValue: ['staging'],
            tier: ssm.ParameterTier.ADVANCED,
        });
        const importedParam = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'imported-param-3', { parameterName: '/my-app/dev/db-password', version: 1 });
        new cdk.CfnOutput(this, 'imported-param-3-value', {
            value: importedParam.parameterName,
        });
    }
}
exports.CdkStarterStack = CdkStarterStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXN0YXJ0ZXItc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstc3RhcnRlci1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUEyQztBQUMzQyxpREFBbUM7QUFFbkMsTUFBYSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzVDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3JFLGFBQWEsRUFBRSwyQkFBMkI7WUFDMUMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUNoQyxjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFFSCxNQUFNLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFDLG1CQUFtQixDQUNuRCxJQUFJLEVBQ0osb0JBQW9CLEVBQ3BCO1lBQ0UsYUFBYSxFQUFFLHNCQUFzQjtZQUNyQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDNUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUTtTQUNqQyxDQUNGLENBQUM7UUFFRixNQUFNLGFBQWEsR0FDakIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxtQ0FBbUMsQ0FDckQsSUFBSSxFQUNKLGtCQUFrQixFQUNsQixFQUFDLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQ3ZELENBQUM7UUFFSixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLHdCQUF3QixFQUFFO1lBQ2hELEtBQUssRUFBRSxhQUFhLENBQUMsYUFBYTtTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFsQ0QsMENBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3NtIGZyb20gJ2F3cy1jZGstbGliL2F3cy1zc20nO1xyXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xyXG5cclxuZXhwb3J0IGNsYXNzIENka1N0YXJ0ZXJTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUGFyYW0gPSBuZXcgc3NtLlN0cmluZ1BhcmFtZXRlcih0aGlzLCAnYWxlcnRzLWVtYWlsLXBhcmFtJywge1xyXG4gICAgICBwYXJhbWV0ZXJOYW1lOiAnL215LXNpdGUvYWxlcnRzLWVtYWlsLWRldicsXHJcbiAgICAgIHN0cmluZ1ZhbHVlOiAnZGV2LWVtYWlsQGV4YW1wbGUuY29tJyxcclxuICAgICAgZGVzY3JpcHRpb246ICd0aGUgZW1haWwgdXNlZCBmb3IgYWxlcnRpbmcgZm9yIGRldicsXHJcbiAgICAgIHR5cGU6IHNzbS5QYXJhbWV0ZXJUeXBlLlNUUklORyxcclxuICAgICAgdGllcjogc3NtLlBhcmFtZXRlclRpZXIuU1RBTkRBUkQsXHJcbiAgICAgIGFsbG93ZWRQYXR0ZXJuOiAnLionLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZW52aXJvbm1lbnRzUGFyYW0gPSBuZXcgc3NtLlN0cmluZ0xpc3RQYXJhbWV0ZXIoXHJcbiAgICAgIHRoaXMsXHJcbiAgICAgICdlbnZpcm9ubWVudHMtcGFyYW0nLFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1ldGVyTmFtZTogJy9xdWJpdHMvZW52aXJvbm1lbnRzJyxcclxuICAgICAgICBzdHJpbmdMaXN0VmFsdWU6IFsnc3RhZ2luZyddLFxyXG4gICAgICAgIHRpZXI6IHNzbS5QYXJhbWV0ZXJUaWVyLkFEVkFOQ0VELFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRlZFBhcmFtID1cclxuICAgICAgc3NtLlN0cmluZ1BhcmFtZXRlci5mcm9tU2VjdXJlU3RyaW5nUGFyYW1ldGVyQXR0cmlidXRlcyhcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgICdpbXBvcnRlZC1wYXJhbS0zJyxcclxuICAgICAgICB7cGFyYW1ldGVyTmFtZTogJy9teS1hcHAvZGV2L2RiLXBhc3N3b3JkJywgdmVyc2lvbjogMX0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ2ltcG9ydGVkLXBhcmFtLTMtdmFsdWUnLCB7XHJcbiAgICAgIHZhbHVlOiBpbXBvcnRlZFBhcmFtLnBhcmFtZXRlck5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19