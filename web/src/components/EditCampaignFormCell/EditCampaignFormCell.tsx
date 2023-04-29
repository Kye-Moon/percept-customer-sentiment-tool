import type {
  FindCampaignInitialValuesQuery,
  FindCampaignInitialValuesQueryVariables,
} from 'types/graphql'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import {CampaignFormSection} from "src/components/CampaignForm/CampaignFormSection/CampaignFormSection";
import {campaignService} from "src/services/campaignService";
import CampaignHeader from "src/components/CampaignHeader/CampaignHeader";

export const QUERY = gql`
  query FindCampaignInitialValuesQuery($id: Int!) {
    initialValues: campaign(id: $id) {
      id
      description
      landingPageSlug
      status
      title
      campaignLandingPage {
        LogoUrl
        PageTitle
        campaignSlug
        pageMessage
        questionOne
        questionTwo
        questionThree
        questionFour
      }
      integrations {
        id
        companyTwitterHandle
        productHuntPostUrl
        productHuntReviewsUrl
        twitterCompanyName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<FindCampaignInitialValuesQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const afterQuery = (data) =>
  ({initialValues: campaignService.getCampaignFormInitialValues({data: data.initialValues})})

export const Success = ({initialValues}: CellSuccessProps<FindCampaignInitialValuesQuery,
  FindCampaignInitialValuesQueryVariables>) => {
  return (

    <CampaignFormSection initialValues={initialValues}/>
  )

}
