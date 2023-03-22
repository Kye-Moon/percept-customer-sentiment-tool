import type {
  QueryResolvers,
  MutationResolvers,
  CampaignReviewRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/utils/db'

export const campaignReviews: QueryResolvers['campaignReviews'] = () => {
  return db.campaignReview.findMany()
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
