export const UPDATE_REVIEW= gql`
  mutation UpdateReviewMutation($id: Int!, $input: UpdateReviewInput!) {
    updateReview(id: $id, input: $input){
      id
    }
  }
`
export const CREATE_REVIEW = gql`
  mutation CreateReviewMutation($input: CreateReviewInput!, $campaignId: Int) {
    createReview(input: $input, campaignId: $campaignId){
      id
    }
  }
`


export const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign($input: CreateOrUpdateCampaignInput!) {
    createCampaign(input: $input){
      id
    }
  }
`

export const UPDATE_CAMPAIGN = gql`
  mutation UpdateCampaign($id: Int!, $input: CreateOrUpdateCampaignInput!) {
    updateCampaign(id: $id, input: $input){
      id
    }
  }
`


