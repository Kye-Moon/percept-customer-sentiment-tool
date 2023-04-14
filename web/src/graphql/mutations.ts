export const UPDATE_REVIEW= gql`
  mutation UpdateReviewMutation($id: Int!, $input: UpdateReviewInput!) {
    updateReview(id: $id, input: $input){
      id
    }
  }
`


export const CREATE_CAMPAIGN = gql`
  mutation CreateCampaign($input: CreateCampaignInput!) {
    createCampaign(input: $input){
      id
    }
  }
`

