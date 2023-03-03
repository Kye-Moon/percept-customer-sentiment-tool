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
    archived: Boolean
    favourite: Boolean
    onWall: Boolean
  }

  type FetchedCount{
    count: Int!
  }

  enum QueryFilter{
    ALL
    ARCHIVED
    FAVOURITE
    ONWALL
  }

  type Query {
    recommendedMentions: [RecommendedMention!]! @requireAuth
    recommendedMention(id: Int!): RecommendedMention @requireAuth
    fetchNewRecommendedMentions: FetchedCount @skipAuth # add user id to fetch params
    filteredRecommendedMentions(filter:QueryFilter): [RecommendedMention!]! @skipAuth
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
    favouriteReview(id:Int!): RecommendedMention! @skipAuth
    archiveReview(id:Int!): RecommendedMention! @skipAuth
    addReviewToWall(id:Int!): RecommendedMention! @skipAuth

    ## CRUD #####
    createRecommendedMention(input: CreateRecommendedMentionInput!): RecommendedMention! @requireAuth
    createManyRecommendedMentions(input: [CreateRecommendedMentionInput!]!): FetchedCount! @requireAuth
    updateRecommendedMention(id: Int! input: UpdateRecommendedMentionInput!): RecommendedMention! @requireAuth
    deleteRecommendedMention(id: Int!): RecommendedMention! @requireAuth
  }
`
