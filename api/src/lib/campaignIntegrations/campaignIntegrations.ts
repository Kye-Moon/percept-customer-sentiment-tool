const axios = require('axios');

type TriggerInput = {
  campaignId: number
  productHuntPostUrl?: string,
  productHuntReviewsUrl?: string,
  twitterCompanyName?: string,
  twitterHandle?: string
}
const messagingApiPrefix = "http://localhost:8911/api/messaging"

export const triggerCampaignIntegrationRequest = (
  {campaignId, productHuntPostUrl, productHuntReviewsUrl, twitterCompanyName, twitterHandle}: TriggerInput
) => {

  const config = {
    method: 'get',
    url: `${messagingApiPrefix}/integration-request`,
    params:{
      campaignId: campaignId,
      productHuntPostUrl: productHuntPostUrl,
      productHuntReviewsUrl: productHuntReviewsUrl,
      twitterCompanyName: twitterCompanyName,
      twitterHandle: twitterHandle
    },
  };

  return axios(config)
}
