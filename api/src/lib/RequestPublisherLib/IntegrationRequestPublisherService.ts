import {PublishCommand, SNSClient} from "@aws-sdk/client-sns";
import {APIGatewayEvent} from "aws-lambda";
import {IntegrationRequestCommand, SNSPublishParams} from "src/lib/RequestPublisherLib/types";

const REGION = "ap-southeast-2";
const snsClient = new SNSClient({region: REGION});
let topicARN = process.env.TOPIC_ARN
const PRODUCTHUNT_POST = "PRODUCTHUNT_POST"
const PRODUCTHUNT_REVIEW = "PRODUCTHUNT_REVIEW"
const TWITTER = "TWITTER"



export class IntegrationRequestPublisherService {

  public processIntegrationRequestEvent(event: APIGatewayEvent) {
    const integrationRequest = this.extractParamsFromGatewayEvent(event)
    // Check campaign exists
    if (integrationRequest.campaignId === undefined) throw new Error("Campaign Id is undefined")

    if (integrationRequest.productHuntPostUrl !== undefined) {
      const phPostParams = this.buildPublishParams(integrationRequest.campaignId,integrationRequest.productHuntPostUrl, PRODUCTHUNT_POST)
      this.publishToSNS(phPostParams).then(data => console.log("Success.", data))
    }

    if (integrationRequest.productHuntReviewsUrl !== undefined) {
      const phReviewParams = this.buildPublishParams(integrationRequest.campaignId,integrationRequest.productHuntReviewsUrl, PRODUCTHUNT_REVIEW)
      this.publishToSNS(phReviewParams).then(data => console.log("Success.", data))
    }

    if (integrationRequest.twitterCompanyName !== undefined && integrationRequest.companyTwitterHandle !== undefined) {
      const twitterIdentifiers = {
        twitterCompanyName: integrationRequest.twitterCompanyName,
        twitterHandle: integrationRequest.companyTwitterHandle
      }
      const twitterParams = this.buildPublishParams(integrationRequest.campaignId,JSON.stringify(twitterIdentifiers), TWITTER)
      this.publishToSNS(twitterParams).then(data => console.log("Success.", data))
    }
  }

  private buildPublishParams = (campaingId: string, body: string, taskType: string): SNSPublishParams => {
    return {
      Message: JSON.stringify({campaignId: campaingId, body:body}), /* required */
      TopicArn: topicARN,
      MessageAttributes: {
        "task_type": {
          DataType: 'String',
          StringValue: taskType,
        }
      },
    }
  }

  private extractParamsFromGatewayEvent = (event: APIGatewayEvent): IntegrationRequestCommand => {
    return {
      campaignId: (event.queryStringParameters.campaignId !== null) ? event.queryStringParameters.campaignId : undefined,
      productHuntPostUrl: (event.queryStringParameters.productHuntPostUrl !== null) ? event.queryStringParameters.productHuntPostUrl : undefined ,
      productHuntReviewsUrl: (event.queryStringParameters.productHuntReviewsUrl !== null) ? event.queryStringParameters.productHuntReviewsUrl : undefined,
      twitterCompanyName:( event.queryStringParameters.twitterCompanyName !== null) ? event.queryStringParameters.twitterCompanyName : undefined,
      companyTwitterHandle: (event.queryStringParameters.companyTwitterHandle !== null) ? event.queryStringParameters.companyTwitterHandle : undefined,
    }
  }

  async publishToSNS(params) {
    try {
      return await snsClient.send(new PublishCommand(params)); // For unit tests.
    } catch (err) {
      console.log("Error", err.stack);
    }
  };
}

