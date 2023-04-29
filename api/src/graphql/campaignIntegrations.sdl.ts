export const schema = gql`
  type CampaignIntegration {
    id: Int!
    campaign: Campaign!
    campaignId: Int!
    productHuntPostUrl: String
    productHuntReviewsUrl: String
    twitterCompanyName: String
    companyTwitterHandle: String
    updatedAt: DateTime!
  }

  type Query {
    campaignIntegrations: [CampaignIntegration!]! @requireAuth
    campaignIntegration(id: Int!): CampaignIntegration @requireAuth
   ## triggerIntegrationRequest(campaignId:Int!): TriggerResponse @skipAuth # add user id to fetch params
  }

  input CreateCampaignIntegrationInput {
    campaignId: Int!
    productHuntPostUrl: String
    productHuntReviewsUrl: String
    twitterCompanyName: String
    companyTwitterHandle: String
  }

  input UpdateCampaignIntegrationInput {
    productHuntPostUrl: String
    productHuntReviewsUrl: String
    twitterCompanyName: String
    companyTwitterHandle: String
  }

  type Mutation {
    createCampaignIntegration(
      input: CreateCampaignIntegrationInput!
    ): CampaignIntegration! @skipAuth
    updateCampaignIntegration(
      id: Int!
      input: UpdateCampaignIntegrationInput!
    ): CampaignIntegration! @requireAuth
    deleteCampaignIntegration(id: Int!): CampaignIntegration! @requireAuth
  }
`
