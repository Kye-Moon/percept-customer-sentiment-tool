export const schema = gql`
  type RecommendedMention {
    id: Int!
    createAt: String!
    externalReference: String
    body: String!
    mentionSource: String!
    username: String!
    userDescription: String
    profileImageUrl: String!
  }
  type NewRecommendedMention {
      createAt: String!
      externalReference: String
      body: String!
      mentionSource: String!
      username: String!
      userDescription: String
      profileImageUrl: String!
  }
  type FetchedCount{
    count: Int!
  }

  type Query {
    recommendedMentions: [RecommendedMention!]! @requireAuth
    recommendedMention(id: Int!): RecommendedMention @requireAuth
    fetchNewRecommendedMentions: FetchedCount @skipAuth # add user id to fetch params
  }

  input CreateRecommendedMentionInput {
    createAt: String!
    externalReference: String!
    body: String!
    mentionSource: String!
    username: String!
    userDescription: String!
    profileImageUrl: String!
  }

  input UpdateRecommendedMentionInput {
    createAt: String
    externalReference: String
    body: String
    mentionSource: String
    username: String
    userDescription: String
    profileImageUrl: String
  }

  type Mutation {
    createRecommendedMention(
      input: CreateRecommendedMentionInput!
    ): RecommendedMention! @requireAuth
    updateRecommendedMention(
      id: Int!
      input: UpdateRecommendedMentionInput!
    ): RecommendedMention! @requireAuth
    deleteRecommendedMention(id: Int!): RecommendedMention! @requireAuth
  }
`
