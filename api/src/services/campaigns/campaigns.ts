import type {
  QueryResolvers,
  MutationResolvers,
  CampaignRelationResolvers,
} from 'types/graphql'

import {db} from 'src/lib/utils/db'
import {createCampaignIntegration} from "src/services/campaignIntegrations/campaignIntegrations";
const axios = require('axios')

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

export const createCampaign: MutationResolvers['createCampaign'] = async ({input}) => {
  const campaign = await db.campaign.create({
    data: {
      userId: input.userId,
      title: input.title,
      description: input.description,
    },
  })

  createCampaignIntegration({input: {
        campaignId: campaign.id,
        productHuntPostUrl: input.integrations.productHuntPostUrl,
        productHuntReviewsUrl: input.integrations.productHuntReviewsUrl,
        twitterCompanyName: input.integrations.twitterCompanyName,
        companyTwitterHandle: input.integrations.companyTwitterHandle,
      }
  })

  return campaign
}

export const updateCampaign: MutationResolvers['updateCampaign'] = ({id, input}) => {
  return db.campaign.update({
    data: input,
    where: {id},
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
}


