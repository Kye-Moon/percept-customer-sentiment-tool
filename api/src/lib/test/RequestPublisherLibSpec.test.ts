import {IntegrationRequestPublisherService} from "src/lib/RequestPublisherLib/IntegrationRequestPublisherService";
import {mockHttpEvent} from '@redwoodjs/testing/api'

let integrationRequestPublisherService = new IntegrationRequestPublisherService()

describe('processIntegrationRequestEvent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should publish to SNS when productHunt post integration is requested only', async () => {
    jest.spyOn(integrationRequestPublisherService, "publishToSNS")
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        productHuntPostUrl: "https://www.producthunt.com/posts/blahhh",
      },
    })

    integrationRequestPublisherService.processIntegrationRequestEvent(apiGatewayEvent)

    expect(integrationRequestPublisherService.publishToSNS).toBeCalledTimes(1)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledWith({
      Message: "{\"campaignId\":\"1\",\"body\":\"https://www.producthunt.com/posts/blahhh\"}", /* required */
      TopicArn: "testARN",
      MessageAttributes: {
        task_type: {
          DataType: "String",
          StringValue: "PRODUCTHUNT_POST",
        }
      },
    })
  })

  it('should publish to SNS when productHunt Review integration is requested only', async () => {
    jest.spyOn(integrationRequestPublisherService, "publishToSNS")
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        productHuntReviewsUrl: "https://www.producthunt.com/products/blahhh/reviews",
      },
    })

    integrationRequestPublisherService.processIntegrationRequestEvent(apiGatewayEvent)

    expect(integrationRequestPublisherService.publishToSNS).toBeCalledTimes(1)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledWith({
      Message: "{\"campaignId\":\"1\",\"body\":\"https://www.producthunt.com/products/blahhh/reviews\"}", /* required */
      TopicArn: "testARN",
      MessageAttributes: {
        task_type: {
          DataType: "String",
          StringValue: "PRODUCTHUNT_REVIEW",
        }
      },
    })
  })

  it('should publish to SNS when twitter integration is requested only', async () => {
    jest.spyOn(integrationRequestPublisherService, "publishToSNS")
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        twitterCompanyName: "twitterCompanyName",
        companyTwitterHandle: "companyTwitterHandle",
      },
    })

    integrationRequestPublisherService.processIntegrationRequestEvent(apiGatewayEvent)

    expect(integrationRequestPublisherService.publishToSNS).toBeCalledTimes(1)
    expect(integrationRequestPublisherService.publishToSNS).toBeCalledWith({
      Message: "{\"campaignId\":\"1\",\"body\":\"{\\\"twitterCompanyName\\\":\\\"twitterCompanyName\\\",\\\"twitterHandle\\\":\\\"companyTwitterHandle\\\"}\"}", // TODO FIX
      TopicArn: "testARN",
      MessageAttributes: {
        task_type: {
          DataType: "String",
          StringValue: "TWITTER",
        }
      },
    })
  })

  it('should publish to SNS when all integrations are requested', async () => {
    jest.spyOn(integrationRequestPublisherService, "publishToSNS")
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        productHuntPostUrl: "productHuntPostUrl",
        productHuntReviewsUrl: "productHuntReviewsUrl",
        twitterCompanyName: "twitterCompanyName",
        companyTwitterHandle: "companyTwitterHandle",
      },
    })

    integrationRequestPublisherService.processIntegrationRequestEvent(apiGatewayEvent)

    expect(integrationRequestPublisherService.publishToSNS).toBeCalledTimes(3)
  })

  it('should throw error if campaign id is undefined', async () => {
    jest.spyOn(integrationRequestPublisherService, "processIntegrationRequestEvent")
    const apiGatewayEvent = mockHttpEvent({
      queryStringParameters: {
        productHuntPostUrl: "productHuntPostUrl",
        productHuntReviewsUrl: "productHuntReviewsUrl",
        twitterCompanyName: "twitterCompanyName",
        companyTwitterHandle: "companyTwitterHandle",
      },
    })

    expect(() => integrationRequestPublisherService.processIntegrationRequestEvent(apiGatewayEvent)).toThrowError()
  })
})

