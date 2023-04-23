import {QuestionMarkCircleIcon} from "@heroicons/react/20/solid";
import {REVIEW_TYPES} from "src/pages/CampaignLandingPageTemplate/CampaignLandingPageTemplate";
import {CampaignLandingPageDto} from "$api/types/graphql";


interface CampaignLandingPageTemplateHeroProps {
  campaignLandingPageData: CampaignLandingPageDto
  reviewType: REVIEW_TYPES
  setReviewType: Function
}

export const CampaignLandingPageTemplateHero = ({reviewType,setReviewType, campaignLandingPageData}:CampaignLandingPageTemplateHeroProps) => {
  const {PageTitle, pageMessage,questions, LogoUrl ,  primaryColor,secondaryColor, textColor} = campaignLandingPageData
  return (
    <>
      <div className="h-full ">
        <div className={`h-4/5 text-base-100 flex flex-col place-content-center`}>
          <div className={'flex flex-col space-y-8 place-items-center'}>
            <div className={' flex justify-center'}>
              <img src={LogoUrl} className=" rounded-3xl "/>
            </div>
            <div className=" flex flex-col space-y-4 ">
              <h1 className="text-6xl font-bold flex justify-center">{PageTitle}</h1>
              <p className=" flex text-lg text-center justify-center">{pageMessage}</p>
            </div>
            <div className="w-8/12 flex flex-col ">
              <h1 className={`text-xl text-primary font-bold flex `}>Questions</h1>
              {questions.map((question) => {
                return (
                  <div className={'flex space-x-4'} key={question}>
                    <QuestionMarkCircleIcon className={'w-4'}/>
                    <p className=" flex ">{question}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={'text-base-100 flex flex-col '}>
          <div className={'flex space-x-10 px-40 '}>
            <div className={`btn btn-wide w-1/2  ${reviewType === REVIEW_TYPES.TEXT ? 'btn-active' : 'btn-outline text-base-100'}`}
                 onClick={() => setReviewType(REVIEW_TYPES.TEXT)}
            >
              Text review
            </div>
            <div className={`btn btn-wide w-1/2  ${reviewType === REVIEW_TYPES.VIDEO ? 'btn-active' : 'btn-outline text-base-100'}`}
                 onClick={() => setReviewType(REVIEW_TYPES.VIDEO)}
            >
              Video review
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
