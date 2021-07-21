# cloudfront-function-typescript

A CloudFront function written in TypeScript, bundled by Rollup and deployed with CloudFormation

**Isn't this a bit overkill?** Yeah, probably

This does support importing external packages but due to limited functionalilty of the runtime and CloudFront functions having a max size of 10 KB, I wouldn't recommend it.

More information on the CloudFront function custom runtime features: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html
