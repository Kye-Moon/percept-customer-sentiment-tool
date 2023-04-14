export const schema = gql`
  type Review {
    id: Int!
    createAt: String!
    externalReference: String
    body: String!
    mentionSource: String!
    username: String!
    status: ReviewStatus!
    userDescription: String
    profileImageUrl: String!
    archived: Boolean
    favourite: Boolean
    onWall: Boolean
  }

  type FetchedCount{
    count: Int!
  }

  enum ReviewStatus {
    NEW
    RECCOMENDED
    ARCHIVED
    FAVORITE
    ACTIVE
  }

  enum QueryFilter{
    ALL
    ARCHIVED
    FAVOURITE
    ONWALL
  }


  type Query {
    reviews: [Review!]! @skipAuth
    review(id: Int!): Review @requireAuth
    filteredReviews(filter:QueryFilter): [Review!]! @skipAuth
  }

  input CreateReviewInput {
    createAt: String!
    externalReference: String!
    body: String!
    mentionSource: String!
    username: String!
    userDescription: String!
    profileImageUrl: String!
  }

  input UpdateReviewInput {
    createAt: String
    externalReference: String
    body: String
    mentionSource: String
    username: String
    status: ReviewStatus
    userDescription: String
    profileImageUrl: String
  }

  type Mutation {
    favouriteReview(id:Int!): Review! @skipAuth
    archiveReview(id:Int!): Review! @skipAuth
    addReviewToWall(id:Int!): Review! @skipAuth

    ## CRUD #####
    createReview(input: CreateReviewInput!): Review! @requireAuth
    createManyReviews(input: [CreateReviewInput!]!): FetchedCount! @requireAuth
    updateReview(id: Int! input: UpdateReviewInput!): Review! @requireAuth
    deleteReview(id: Int!): Review! @requireAuth
  }
`
