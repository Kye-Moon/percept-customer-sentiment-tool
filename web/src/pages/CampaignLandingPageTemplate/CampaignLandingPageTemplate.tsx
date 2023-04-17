import {MetaTags} from '@redwoodjs/web'

import {useContext, useState} from 'react'
import {TextReviewForm} from "src/components/Forms/TextReviewForm";
import {CampaignLandingPageTemplateHero} from "src/components/Heros/CampaignLandingPageTemplateHero";
//@ts-ignore
import CampaignLandingPageTemplateCell from "src/components/CampaignLandingPageTemplateCell/CampaignLandingPageTemplateCell";
import {CampaignContext} from "src/context/CampaignContext";
import {useParams} from "@redwoodjs/router";

export enum REVIEW_TYPES {
  TEXT,
  VIDEO,
}

const CampaignLandingPageTemplate = () => {
  const [reviewType, setReviewType] = useState(REVIEW_TYPES.TEXT)
  const {id} = useParams()
  return (
    <div className={''}>
      <MetaTags
        title="PublicCampaignLanding"
        description="PublicCampaignLanding page"
      />
     <CampaignLandingPageTemplateCell slug={id} />
    </div>
  )
}

export default CampaignLandingPageTemplate
