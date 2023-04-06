import type {APIGatewayEvent, Context} from 'aws-lambda'
import {logger} from 'src/lib/utils/logger'
// Load the AWS SDK for Node.js

import {PublishCommand, PublishCommandInput, SNSClient} from "@aws-sdk/client-sns";
import {
  buildPublishParams,
  extractParamsFromGatewayEvent,
  publishToSNS
} from "src/lib/RequestPublisherLib/IntegrationRequestPublisherService";

const PRODUCTHUNT_POST = "PRODUCTHUNT_POST"
const PRODUCTHUNT_REVIEW = "PRODUCTHUNT_REVIEW"
const TWITTER = "TWITTER"
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

  const integrationRequest = extractParamsFromGatewayEvent(event)
  console.log("Integration Request: " + JSON.stringify(integrationRequest))

  if (integrationRequest.campaignId === undefined) throw new Error("Campaign Id is undefined")

  if (integrationRequest.productHuntPostUrl !== undefined) {
    console.log("Product Hunt Post URL: " + integrationRequest.productHuntPostUrl)
    const phPostParams = buildPublishParams(integrationRequest.campaignId,integrationRequest.productHuntPostUrl, PRODUCTHUNT_POST)
    console.log("Publish Params: " + JSON.stringify(phPostParams))
    await publishToSNS(phPostParams).then(data => console.log("Success.", data))
  }

  if (integrationRequest.productHuntReviewsUrl !== undefined) {
    const phReviewParams = buildPublishParams(integrationRequest.campaignId,integrationRequest.productHuntReviewsUrl, PRODUCTHUNT_REVIEW)
    publishToSNS(phReviewParams).then(data => console.log("Success.", data))
  }

  if (integrationRequest.twitterCompanyName !== undefined && integrationRequest.companyTwitterHandle !== undefined) {
    const twitterIdentifiers = {
      twitterCompanyName: integrationRequest.twitterCompanyName,
      twitterHandle: integrationRequest.companyTwitterHandle
    }
    const twitterParams = buildPublishParams(integrationRequest.campaignId,JSON.stringify(twitterIdentifiers), TWITTER)
    publishToSNS(twitterParams).then(data => console.log("Success.", data))
  }

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

