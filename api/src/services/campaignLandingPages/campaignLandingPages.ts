import type {
  CampaignLandingPageDto,
  CampaignLandingPageRelationResolvers,
  MutationResolvers,
  QueryResolvers,
} from 'types/graphql'

import {db} from "src/lib/db";

export const campaignLandingPages: QueryResolvers['campaignLandingPages'] =
  () => {
    return db.campaignLandingPage.findMany()
  }

export const campaignLandingPage: QueryResolvers['campaignLandingPage'] = async ({slug}) => {
  const campaignLandingPage = await db.campaignLandingPage.findUnique({
    where: {campaignSlug: slug},
  })
  console.log(campaignLandingPage)

  return {
    id: campaignLandingPage.id,
    campaignId: campaignLandingPage.campaignId,
    campaignSlug: campaignLandingPage.campaignSlug,
    PageTitle: campaignLandingPage.PageTitle,
    pageMessage: campaignLandingPage.pageMessage,
    LogoUrl: campaignLandingPage.LogoUrl,
    primaryColor: campaignLandingPage.primaryColor,
    secondaryColor: campaignLandingPage.secondaryColor,
    textColor: campaignLandingPage.textColor,
    updatedAt: campaignLandingPage.updatedAt,
    questions: [campaignLandingPage.questionOne, campaignLandingPage.questionTwo, campaignLandingPage.questionThree, campaignLandingPage.questionFour]
  } as CampaignLandingPageDto
}


export const createCampaignLandingPage: MutationResolvers['createCampaignLandingPage'] =
  ({input}) => {
    return db.campaignLandingPage.create({
      data: {
        campaignId: input.campaignId as number,
        campaignSlug: input.campaignSlug,
        PageTitle: input.pageTitle,
        pageMessage: input.pageMessage,
        questionOne: input.questions[0],
        questionTwo: input.questions[1],
        questionThree: input.questions[2],
        questionFour: input.questions[3],
        LogoUrl: input.logoUrl,
      },
    })
  }

export const updateCampaignLandingPage: MutationResolvers['updateCampaignLandingPage'] =
  ({id, input}) => {
    return db.campaignLandingPage.update({
      data: input,
      where: {id},
    })
  }

export const deleteCampaignLandingPage: MutationResolvers['deleteCampaignLandingPage'] =
  ({id}) => {
    return db.campaignLandingPage.delete({
      where: {id},
    })
  }

export const CampaignLandingPage: CampaignLandingPageRelationResolvers = {
  campaign: (_obj, {root}) => {
    return db.campaignLandingPage
      .findUnique({where: {id: root?.id}})
      .campaign()
  },
}
