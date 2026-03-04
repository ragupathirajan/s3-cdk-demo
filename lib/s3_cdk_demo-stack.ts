import * as cdk from 'aws-cdk-lib/core';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';


export class S3CdkDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S3CdkDemoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
    new s3.Bucket(this, 'MyPracticeBucket', {
      bucketName: 'justs3-practice-bucket', // must be globally unique
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // safe for dev
      autoDeleteObjects: true, // safe for dev
    });
    new s3.Bucket(this, 'Extracts', {
      bucketName: 'downstream-extracts-out', // must be globally unique
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // safe for dev
      autoDeleteObjects: true, // safe for dev
    });

  }
}
