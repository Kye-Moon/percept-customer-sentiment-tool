import type {
  QueryResolvers,
  MutationResolvers,
  CampaignIntegrationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const campaignIntegrations: QueryResolvers['campaignIntegrations'] =
  () => {
    return db.campaignIntegration.findMany()
  }

export const campaignIntegration: QueryResolvers['campaignIntegration'] = ({
  id,
}) => {
  return db.campaignIntegration.findUnique({
    where: { id },
  })
}

export const createCampaignIntegration: MutationResolvers['createCampaignIntegration'] =
  ({ input }) => {
    return db.campaignIntegration.create({
      data: input,
    })
  }

export const updateCampaignIntegration: MutationResolvers['updateCampaignIntegration'] =
  ({ id, input }) => {
    return db.campaignIntegration.update({
      data: input,
      where: { id },
    })
  }

export const deleteCampaignIntegration: MutationResolvers['deleteCampaignIntegration'] =
  ({ id }) => {
    return db.campaignIntegration.delete({
      where: { id },
    })
  }

export const CampaignIntegration: CampaignIntegrationRelationResolvers = {
  campaign: (_obj, { root }) => {
    return db.campaignIntegration
      .findUnique({ where: { id: root?.id } })
      .campaign()
  },
}
