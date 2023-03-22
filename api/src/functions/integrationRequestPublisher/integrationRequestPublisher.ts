import type {APIGatewayEvent, Context} from 'aws-lambda'
import {logger} from 'src/lib/utils/logger'
// Load the AWS SDK for Node.js
import {IntegrationRequestPublisherService} from "src/lib/RequestPublisherLib/IntegrationRequestPublisherService";
import {PublishCommand, PublishCommandInput, SNSClient} from "@aws-sdk/client-sns";

const REGION = "ap-southeast-2";
const snsClient = new SNSClient({region: REGION});
let topicARN = process.env.TOPIC_ARN
const PRODUCTHUNT_POST = "PRODUCTHUNT_POST"
const PRODUCTHUNT_REVIEW = "PRODUCTHUNT_REVIEW"
const TWITTER = "TWITTER"
let integrationRequestPublisherService = new IntegrationRequestPublisherService()
/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */

export const handler = async (event: APIGatewayEvent, context: Context) => {
  console.log('Invoked integrationRequestPublisher function with event:'+ JSON.stringify(event))

  integrationRequestPublisherService.processIntegrationRequestEvent(event)

  return {
    statusCode: 201,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: '${name} function',
    }),
  }
}

