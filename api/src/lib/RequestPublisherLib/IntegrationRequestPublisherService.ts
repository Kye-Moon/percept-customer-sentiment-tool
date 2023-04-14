import {PublishCommand, SNSClient} from "@aws-sdk/client-sns";
import {APIGatewayEvent} from "aws-lambda";
import {IntegrationRequestCommand, SNSPublishParams} from "src/lib/RequestPublisherLib/types";

const REGION = "ap-southeast-2";
const snsClient = new SNSClient({region: REGION});
let topicARN = process.env.TOPIC_ARN

export function buildPublishParams (campaingId: string, body: string, taskType: string): SNSPublishParams {
    return {
      Message: JSON.stringify({campaignId: campaingId, requestUrl:body}), /* required */
      TopicArn: topicARN,
      MessageAttributes: {
        "task_type": {
          DataType: 'String',
          StringValue: taskType,
        }
      },
    }
  }

export function extractParamsFromGatewayEvent(event: APIGatewayEvent): IntegrationRequestCommand  {
    return {
      campaignId: (event.queryStringParameters.campaignId !== null) ? event.queryStringParameters.campaignId : undefined,
      productHuntPostUrl: (event.queryStringParameters.productHuntPostUrl !== null) ? event.queryStringParameters.productHuntPostUrl : undefined ,
      productHuntReviewsUrl: (event.queryStringParameters.productHuntReviewsUrl !== null) ? event.queryStringParameters.productHuntReviewsUrl : undefined,
      twitterCompanyName:( event.queryStringParameters.twitterCompanyName !== null) ? event.queryStringParameters.twitterCompanyName : undefined,
      companyTwitterHandle: (event.queryStringParameters.companyTwitterHandle !== null) ? event.queryStringParameters.companyTwitterHandle : undefined,
    }
  }

export async function publishToSNS(params) {
    try {
      return await snsClient.send(new PublishCommand(params)); // For unit tests.
    } catch (err) {
      return err;
    }
  }


