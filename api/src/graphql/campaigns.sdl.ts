export const schema = gql`
  type Campaign {
    id: Int!
    createAt: DateTime!
    updatedAt: DateTime!
    userId: String!
    status: String!
    title: String!
    description: String!
    landingPageSlug: String!
    integrations: [CampaignIntegration]
    campaignReviews: [CampaignReview]
    campaignLandingPage: CampaignLandingPage
  }

  type Query {
    campaigns: [Campaign!]! @skipAuth
    campaign(id: Int!): Campaign @skipAuth
  }

  input CreateOrUpdateCampaignInput {
    title: String!
    description: String!
    integrations: CampaignIntegrationInput
    landingPageDetails: LandingPageDetailsInput!
  }

  input LandingPageDetailsInput {
    title: String!
    message: String
    questions: [String]
    landingPageSlug: String!
    logoImageUrl: String
  }

  input CampaignIntegrationInput {
    productHuntPostUrl: String
    productHuntReviewsUrl: String
    twitterCompanyName: String
    companyTwitterHandle: String
  }

  type Mutation {
    createCampaign(input: CreateOrUpdateCampaignInput!): Campaign! @skipAuth
    updateCampaign(id: Int!, input: CreateOrUpdateCampaignInput!): Campaign!
      @requireAuth
    deleteCampaign(id: Int!): Campaign! @requireAuth
  }
`
