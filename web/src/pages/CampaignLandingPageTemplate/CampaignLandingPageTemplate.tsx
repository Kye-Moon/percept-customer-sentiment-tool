import {MetaTags} from '@redwoodjs/web'

import {useState} from 'react'
import {TextReviewForm} from "src/components/Forms/TextReviewForm";
import {CampaignLandingPageTemplateHero} from "src/components/Heros/CampaignLandingPageTemplateHero";

export enum REVIEW_TYPES {
  TEXT,
  VIDEO,
}
const CampaignLandingPageTemplate = () => {
  const [reviewType, setReviewType] = useState(REVIEW_TYPES.TEXT)
  return (
    <div className={''}>
      <MetaTags
        title="PublicCampaignLanding"
        description="PublicCampaignLanding page"
      />
      <div className={'grid grid-rows-6 grid-cols-4 bg-neutral-50 h-screen'}>
        <div className={'row-span-6 col-span-2 '}>
          <CampaignLandingPageTemplateHero
            reviewType={reviewType}
            setReviewType={setReviewType}
          />
        </div>
        <div className={'row-span-6 col-span-2 space-y-20  flex flex-col bg-base-100  place-content-center '}>
          {reviewType === REVIEW_TYPES.TEXT ? <TextReviewForm/> : <></>}
        </div>
      </div>
    </div>
  )
}

export default CampaignLandingPageTemplate
