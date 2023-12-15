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
            parameterName: '/my-site/environments',
            stringListValue: ['dev', 'test', 'prod'],
            tier: ssm.ParameterTier.ADVANCED,
        });
        const importedParam = ssm.StringParameter.fromSecureStringParameterAttributes(this, 'imported-param-3', { parameterName: '/my-app/dev/db-password', version: 1 });
        new cdk.CfnOutput(this, 'imported-param-3-value', {
            value: importedParam.parameterName,
        });
    }
}
exports.CdkStarterStack = CdkStarterStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXN0YXJ0ZXItc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstc3RhcnRlci1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUEyQztBQUMzQyxpREFBbUM7QUFFbkMsTUFBYSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBQzVDLFlBQVksS0FBYyxFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM1RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ3JFLGFBQWEsRUFBRSwyQkFBMkI7WUFDMUMsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU07WUFDOUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUNoQyxjQUFjLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUM7UUFFSCxNQUFNLGlCQUFpQixHQUFHLElBQUksR0FBRyxDQUFDLG1CQUFtQixDQUNuRCxJQUFJLEVBQ0osb0JBQW9CLEVBQ3BCO1lBQ0UsYUFBYSxFQUFFLHVCQUF1QjtZQUN0QyxlQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztZQUN4QyxJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRO1NBQ2pDLENBQ0YsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUNqQixHQUFHLENBQUMsZUFBZSxDQUFDLG1DQUFtQyxDQUNyRCxJQUFJLEVBQ0osa0JBQWtCLEVBQ2xCLEVBQUMsYUFBYSxFQUFFLHlCQUF5QixFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FDdkQsQ0FBQztRQUVKLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUU7WUFDaEQsS0FBSyxFQUFFLGFBQWEsQ0FBQyxhQUFhO1NBQ25DLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQWxDRCwwQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzc20gZnJvbSAnYXdzLWNkay1saWIvYXdzLXNzbSc7XHJcbmltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2RrU3RhcnRlclN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkFwcCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxQYXJhbSA9IG5ldyBzc20uU3RyaW5nUGFyYW1ldGVyKHRoaXMsICdhbGVydHMtZW1haWwtcGFyYW0nLCB7XHJcbiAgICAgIHBhcmFtZXRlck5hbWU6ICcvbXktc2l0ZS9hbGVydHMtZW1haWwtZGV2JyxcclxuICAgICAgc3RyaW5nVmFsdWU6ICdkZXYtZW1haWxAZXhhbXBsZS5jb20nLFxyXG4gICAgICBkZXNjcmlwdGlvbjogJ3RoZSBlbWFpbCB1c2VkIGZvciBhbGVydGluZyBmb3IgZGV2JyxcclxuICAgICAgdHlwZTogc3NtLlBhcmFtZXRlclR5cGUuU1RSSU5HLFxyXG4gICAgICB0aWVyOiBzc20uUGFyYW1ldGVyVGllci5TVEFOREFSRCxcclxuICAgICAgYWxsb3dlZFBhdHRlcm46ICcuKicsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBlbnZpcm9ubWVudHNQYXJhbSA9IG5ldyBzc20uU3RyaW5nTGlzdFBhcmFtZXRlcihcclxuICAgICAgdGhpcyxcclxuICAgICAgJ2Vudmlyb25tZW50cy1wYXJhbScsXHJcbiAgICAgIHtcclxuICAgICAgICBwYXJhbWV0ZXJOYW1lOiAnL215LXNpdGUvZW52aXJvbm1lbnRzJyxcclxuICAgICAgICBzdHJpbmdMaXN0VmFsdWU6IFsnZGV2JywgJ3Rlc3QnLCAncHJvZCddLFxyXG4gICAgICAgIHRpZXI6IHNzbS5QYXJhbWV0ZXJUaWVyLkFEVkFOQ0VELFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRlZFBhcmFtID1cclxuICAgICAgc3NtLlN0cmluZ1BhcmFtZXRlci5mcm9tU2VjdXJlU3RyaW5nUGFyYW1ldGVyQXR0cmlidXRlcyhcclxuICAgICAgICB0aGlzLFxyXG4gICAgICAgICdpbXBvcnRlZC1wYXJhbS0zJyxcclxuICAgICAgICB7cGFyYW1ldGVyTmFtZTogJy9teS1hcHAvZGV2L2RiLXBhc3N3b3JkJywgdmVyc2lvbjogMX0sXHJcbiAgICAgICk7XHJcblxyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ2ltcG9ydGVkLXBhcmFtLTMtdmFsdWUnLCB7XHJcbiAgICAgIHZhbHVlOiBpbXBvcnRlZFBhcmFtLnBhcmFtZXRlck5hbWUsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19