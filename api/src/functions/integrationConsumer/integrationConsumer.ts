import type { SQSEvent, Context,DynamoDBStreamEvent } from 'aws-lambda'
import { logger } from 'src/lib/utils/logger'
import {DynamoDBStreams} from "aws-sdk";

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
export const handler = async (event: DynamoDBStreamEvent, context: Context) => {
  console.log("consumer invoked")
  for (const record of event.Records) {
    console.log(record.dynamodb.NewImage.PK)
    console.log(record.dynamodb.NewImage.item)
  }
}
