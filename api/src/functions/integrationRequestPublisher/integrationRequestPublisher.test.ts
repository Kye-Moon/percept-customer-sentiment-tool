import { mockHttpEvent } from '@redwoodjs/testing/api'
const integrationRequestPublisherService = require("src/lib/RequestPublisherLib/IntegrationRequestPublisherService")

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { handler } from './integrationRequestPublisher'
import {db} from "src/lib/utils/db";

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-functions
const client = new DynamoDBClient({ region: "REGION" });
describe('integrationRequestPublisher function', () => {
  afterEach(() => {
    jest.clearAllMocks()
  });

  it('product hunt posts integrations are published to sns', async () => {
    jest.spyOn(integrationRequestPublisherService, "publishToSNS")
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        productHuntPostUrl: "https://www.producthunt.com/posts/blahhh",
      },
    })

    const response = await handler(apiGatewayEvent, null)

    expect(response.statusCode).toBe(201)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledTimes(1)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledWith({
      Message: "{\"campaignId\":\"1\",\"requestUrl\":\"https://www.producthunt.com/posts/blahhh\"}", /* required */
      TopicArn: process.env.TOPIC_ARN,
      MessageAttributes: {
        task_type: {
          DataType: "String",
          StringValue: "PRODUCTHUNT_POST",
        }
      },
    })


  })

  it('product hunt review integrations are published to sns', async () => {
    jest.spyOn(integrationRequestPublisherService, "publishToSNS")
    await db.campaign.create({
      data: {
        userId: "input.userId",
        title: "input.title",
        description: "input.description",
      },
    })
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        productHuntReviewsUrl: "https://www.producthunt.com/products/webwave/reviews",
      },
    })
    const campaign = db.campaign.findUnique({where: {id: 1}})
    expect(campaign).not.toBe(null)

    const response = await handler(apiGatewayEvent, null)

    expect(response.statusCode).toBe(201)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledTimes(1)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledWith({
      Message: "{\"campaignId\":\"1\",\"requestUrl\":\"https://www.producthunt.com/products/webwave/reviews\"}", /* required */
      TopicArn: process.env.TOPIC_ARN,
      MessageAttributes: {
        task_type: {
          DataType: "String",
          StringValue: "PRODUCTHUNT_REVIEW",
        }
      },
    })
  })
})

