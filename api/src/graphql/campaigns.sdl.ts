export const schema = gql`
  type Campaign {
    id: Int!
    createAt: DateTime!
    updatedAt: DateTime!
    userId: String!
    status: String!
    title: String!
    description: String!
    integrations: [CampaignIntegration]!
  }

  type Query {
    campaigns(userId:String!): [Campaign!]! @requireAuth
    campaign(id: Int!): Campaign @requireAuth
  }

  input CreateCampaignInput {
    userId: String!
    title: String!
    description: String!
    integrations: CampaignIntegrationInput
  }
  input CampaignIntegrationInput {
    productHuntPostUrl: String
    productHuntReviewsUrl: String
    twitterCompanyName: String
    companyTwitterHandle: String
  }

  input UpdateCampaignInput {
    createAt: DateTime
    userId: String
    status: String
    title: String
    description: String
  }

  type Mutation {
    createCampaign(input: CreateCampaignInput!): Campaign! @skipAuth
    updateCampaign(id: Int!, input: UpdateCampaignInput!): Campaign!
      @requireAuth
    deleteCampaign(id: Int!): Campaign! @requireAuth
  }
`
