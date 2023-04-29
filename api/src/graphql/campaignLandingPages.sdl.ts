export const schema = gql`
  type CampaignLandingPage {
    id: Int!
    campaignId: Int!
    campaign: Campaign!
    campaignSlug: String!
    PageTitle: String
    pageMessage: String
    questionOne: String
    questionTwo: String
    questionThree: String
    questionFour: String
    LogoUrl: String
    primaryColor: String
    secondaryColor: String
    textColor: String
    updatedAt: DateTime!
  }

  type CampaignLandingPageDto {
    id: Int!
    campaignId: Int!
    campaignSlug: String!
    PageTitle: String
    pageMessage: String
    questions: [String]
    LogoUrl: String
    primaryColor: String
    secondaryColor: String
    textColor: String
    updatedAt: DateTime!
  }

  input CreateCampaignLandingPageInput {
    campaignId: Int!
    campaignSlug: String!
    pageTitle: String!
    pageMessage: String
    questions: [String]
    logoUrl: String
    primaryColor: String
    secondaryColor: String
    textColor: String
  }

  input UpdateCampaignLandingPageInput {
    campaignSlug: String
    PageTitle: String
    pageMessage: String
    questionOne: String
    questionTwo: String
    questionThree: String
    questionFour: String
    LogoUrl: String
    primaryColor: String
    secondaryColor: String
    textColor: String
  }


  type Query {
    campaignLandingPages: [CampaignLandingPage!]! @requireAuth
    campaignLandingPage(slug: String!): CampaignLandingPageDto @skipAuth
  }

  type Mutation {
    createCampaignLandingPage(
      input: CreateCampaignLandingPageInput!
    ): CampaignLandingPage! @requireAuth
    updateCampaignLandingPage(
      id: Int!
      input: UpdateCampaignLandingPageInput!
    ): CampaignLandingPage! @requireAuth
    deleteCampaignLandingPage(id: Int!): CampaignLandingPage! @requireAuth
  }
`
