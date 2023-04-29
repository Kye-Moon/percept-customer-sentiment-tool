import type {CampaignReviewRelationResolvers, MutationResolvers, QueryResolvers,} from 'types/graphql'

import {db} from 'src/lib/db'
import {checkUserOwnsCampaign} from "src/lib/CampaignsLib/functions";

export const campaignReviews: QueryResolvers['campaignReviews'] = async ({campaignId}) => {
  const userOwnsCampaign = await checkUserOwnsCampaign(campaignId, context.currentUser?.sub as string)
  if (userOwnsCampaign) {
    return await db.campaignReview.findMany({
      where: {campaignId: campaignId},
      orderBy: {createdAt: 'asc'},
    })
   } else {
   throw new Error('Not authorized')
  }
}

export const campaignReview: QueryResolvers['campaignReview'] = ({ id }) => {

  return db.campaignReview.findUnique({
    where: { id },
  })
}

export const createCampaignReview: MutationResolvers['createCampaignReview'] =
  ({ input }) => {
    return db.campaignReview.create({
      data: input,
    })
  }

export const updateCampaignReview: MutationResolvers['updateCampaignReview'] =
  ({ id, input }) => {
    return db.campaignReview.update({
      data: input,
      where: { id },
    })
  }

export const deleteCampaignReview: MutationResolvers['deleteCampaignReview'] =
  ({ id }) => {
    return db.campaignReview.delete({
      where: { id },
    })
  }

export const CampaignReview: CampaignReviewRelationResolvers = {
  campaign: (_obj, { root }) => {
    return db.campaignReview.findUnique({ where: { id: root?.id } }).campaign()
  },
  review: (_obj, { root }) => {
    return db.campaignReview.findUnique({ where: { id: root?.id } }).review()
  },
}
