export interface IntegrationRequestCommand {
  campaignId: string
  productHuntPostUrl: string
  productHuntReviewsUrl: string
  twitterCompanyName: string
  companyTwitterHandle: string
}

export interface SNSPublishParams {
  Message: string, /* required */
  TopicArn: string,
  MessageAttributes: {
    task_type: {
      DataType: string,
      StringValue: string,
    }
  },
}
