import type {CampaignIntegrationRelationResolvers, MutationResolvers, QueryResolvers,} from 'types/graphql'

import {db} from "src/lib/utils/db";

const axios = require('axios')

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
  async ({input}) => {
    const integration = await db.campaignIntegration.create({
      data: input,
    })

    if (input.productHuntReviewsUrl) {
      const searchParams = new URLSearchParams({
        campaignId: input.campaignId.toString(),
        productHuntReviewsUrl: input.productHuntReviewsUrl,
      })
      const response = sendIntegrationRequest(searchParams)
    }
    return integration
  }

export const sendIntegrationRequest = async (queryStringParams: URLSearchParams) => {
  return await axios.post(`${process.env.REDWOOD_ENV_LAMBDA_API_URL_DEV}/integrationRequestPublisher?` + queryStringParams)
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
