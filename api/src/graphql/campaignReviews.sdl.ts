export const schema = gql`
  type CampaignReview {
    id: Int!
    campaignId: Int!
    reviewId: Int!
    campaign: Campaign!
    review: Review!
  }

  type Query {
    campaignReviews(campaignId: Int!): [CampaignReview!]! @skipAuth
    campaignReview(id: Int!): CampaignReview @requireAuth
  }

  input CreateCampaignReviewInput {
    campaignId: Int!
    reviewId: Int!
  }

  input UpdateCampaignReviewInput {
    campaignId: Int
    reviewId: Int
  }

  type Mutation {
    createCampaignReview(input: CreateCampaignReviewInput!): CampaignReview!
      @requireAuth
    updateCampaignReview(
      id: Int!
      input: UpdateCampaignReviewInput!
    ): CampaignReview! @requireAuth
    deleteCampaignReview(id: Int!): CampaignReview! @requireAuth
  }
`
