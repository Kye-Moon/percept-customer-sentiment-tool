import type {
  CampaignLandingPageDto,
  FindCampaignLandingPageTemplateQuery,
  FindCampaignLandingPageTemplateQueryVariables,
} from 'types/graphql'
import type {CellFailureProps, CellSuccessProps} from '@redwoodjs/web'
import {useState} from "react";
import {CampaignLandingPageTemplateHero} from "src/components/Heros/CampaignLandingPageTemplateHero";
import {TextReviewForm} from "src/components/Forms/TextReviewForm/TextReviewForm";

export const QUERY = gql`
  query FindCampaignLandingPageTemplateQuery($slug: String!) {
    campaignLandingPage(slug: $slug) {
      LogoUrl
      PageTitle
      campaignSlug
      campaignId
      id
      pageMessage
      primaryColor
      questions
      secondaryColor
      textColor
    }
  }
`

export enum REVIEW_TYPES {
  TEXT,
  VIDEO,
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<FindCampaignLandingPageTemplateQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({campaignLandingPage}: CellSuccessProps<FindCampaignLandingPageTemplateQuery, FindCampaignLandingPageTemplateQueryVariables>) => {
  const [reviewType, setReviewType] = useState(REVIEW_TYPES.TEXT)
  return (
    <div className={'grid grid-rows-6 grid-cols-4 bg-neutral-50 h-screen'}>
      <div className={'row-span-6 col-span-2 '}>
        <CampaignLandingPageTemplateHero
          campaignLandingPageData={campaignLandingPage as CampaignLandingPageDto}
          reviewType={reviewType}
          setReviewType={setReviewType}
        />
      </div>
      <div className={'row-span-6 col-span-2 space-y-20  flex flex-col bg-base-100  place-content-center '}>
        {reviewType === REVIEW_TYPES.TEXT ? <TextReviewForm campaignId={campaignLandingPage.campaignId}/> : <></>}
      </div>
    </div>
  )
}
