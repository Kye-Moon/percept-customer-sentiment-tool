import type {CampaignRelationResolvers, MutationResolvers, QueryResolvers,} from 'types/graphql'

import {db} from 'src/lib/db'
import {createCampaignIntegration} from "src/services/campaignIntegrations/campaignIntegrations";
import {createCampaignLandingPage} from "src/services/campaignLandingPages/campaignLandingPages";
import {userOwnsCampaign} from "src/lib/AuthValidationLib/UserAccess";

export const campaigns: QueryResolvers['campaigns'] = () => {
  const currentUser = context.currentUser
  return db.campaign.findMany({where: {userId: currentUser?.sub}})
}

export const campaign: QueryResolvers['campaign'] = async ({id}) => {
  const currentUser = context.currentUser
  const campaign = await db.campaign.findUnique({
    where: {id: id},
  })
  if (campaign.userId !== currentUser?.sub) {
    throw new Error('Not authorized')
  }
  return campaign
}

/**
 * Create campaign plus its integrations and landing page
 * @param input
 */
export const createCampaign: MutationResolvers['createCampaign'] = async ({input}) => {
  const currentUser = context.currentUser
  const campaign = await db.campaign.create({
    data: {
      userId: currentUser?.sub as string,
      title: input.title,
      description: input.description,
      landingPageSlug: input.landingPageDetails.landingPageSlug.toLowerCase(),
    },
  })
  const integrationsPopulated = input.integrations.productHuntPostUrl || input.integrations.productHuntReviewsUrl || input.integrations.twitterCompanyName || input.integrations.companyTwitterHandle

  if (!campaign) {
    throw new Error('Campaign creation failed')
  }

  if (integrationsPopulated) {
    await createCampaignIntegration({
      input: {
        campaignId: campaign.id,
        productHuntPostUrl: input.integrations.productHuntPostUrl,
        productHuntReviewsUrl: input.integrations.productHuntReviewsUrl,
        twitterCompanyName: input.integrations.twitterCompanyName,
        companyTwitterHandle: input.integrations.companyTwitterHandle,
      }
    })
  }

  await createCampaignLandingPage({
    input: {
      campaignId: campaign.id,
      campaignSlug: input.landingPageDetails.landingPageSlug.toLowerCase(),
      pageTitle: input.landingPageDetails.title,
      pageMessage: input.landingPageDetails.message,
      questions: input.landingPageDetails.questions,
      logoUrl: input.landingPageDetails.logoImageUrl,
    }
  })

  return campaign
}

/**
 * Update campaign plus its integrations and landing page
 * @param id
 * @param input
 */
export const updateCampaign: MutationResolvers['updateCampaign'] = async ({id, input}) => {
  const currentUser = context.currentUser
  await userOwnsCampaign(currentUser, id)
  const landingPageClause = getlandingPageClause(input)
  const integrationsClause = getIntegrationsClause(input)

  return await db.campaign.update({
    where: {id: id},
    data: {
      title: input.title,
      description: input.description,
      landingPageSlug: input.landingPageDetails.landingPageSlug.toLowerCase(),
      landingPage:{
        upsert:{
          create: {...landingPageClause},
          update: {...landingPageClause},
        }
      },
      integrations:{
        upsert:{
          where: {id: id},
          create: {...integrationsClause},
          update: {...integrationsClause},
        }
      }
    }
  })

}

export const deleteCampaign: MutationResolvers['deleteCampaign'] = ({id}) => {
  return db.campaign.delete({
    where: {id},
  })
}

export const Campaign: CampaignRelationResolvers = {
  integrations: (_obj, {root}) => {
    return db.campaign.findUnique({where: {id: root?.id}}).integrations()
  },
  campaignReviews: (_obj, {root}) => {
    return db.campaign.findUnique({where: {id: root?.id}}).reviews()
  },
  campaignLandingPage: (_obj, {root}) => {
    return db.campaign.findUnique({where: {id: root?.id}}).landingPage()
  },
}

const getIntegrationsClause = (input) => {
  return {
      productHuntPostUrl: input.integrations.productHuntPostUrl || null,
      productHuntReviewsUrl: input.integrations.productHuntReviewsUrl || null,
      twitterCompanyName: input.integrations.twitterCompanyName || null,
      companyTwitterHandle: input.integrations.companyTwitterHandle || null,
  }
}

const getlandingPageClause = (input) => {
  const questions = input.landingPageDetails.questions
  return  {
      campaignSlug: input.landingPageDetails.landingPageSlug.toLowerCase(),
      PageTitle: input.landingPageDetails.title,
      pageMessage: input.landingPageDetails.message || null,
      questionOne: (questions?.hasOwnProperty(0) ? questions[0] : null),
      questionTwo: (questions?.hasOwnProperty(1) ? questions[1] : null),
      questionThree: (questions?.hasOwnProperty(2) ? questions[2] : null),
      questionFour: (questions?.hasOwnProperty(3) ? questions[3] : null),
      LogoUrl: input.landingPageDetails.logoImageUrl || null,
  }
}

const isPopulated = (input) => {
  if (!input) return false
  return Object.keys(input).length !== 0;
}

