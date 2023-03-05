import type {
  QueryResolvers,
  MutationResolvers,
  CampaignRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const campaigns: QueryResolvers['campaigns'] = ({userId}) => {
  return db.campaign.findMany({where:{userId: userId}})
}

export const campaign: QueryResolvers['campaign'] = ({ id }) => {
  return db.campaign.findUnique({
    where: { id },
  })
}

export const createCampaign: MutationResolvers['createCampaign'] = ({
  input,
}) => {
  return db.campaign.create({
    data: {
      userId: input.userId,
      title: input.title,
      description: input.description,
      integrations:{
        create:{
          productHuntPostUrl: input.integrations.productHuntPostUrl,
          productHuntReviewsUrl: input.integrations.productHuntReviewsUrl,
          twitterCompanyName: input.integrations.twitterCompanyName,
          companyTwitterHandle: input.integrations.companyTwitterHandle,
        }
      }
    },
  })
}

export const updateCampaign: MutationResolvers['updateCampaign'] = ({
  id,
  input,
}) => {
  return db.campaign.update({
    data: input,
    where: { id },
  })
}

export const deleteCampaign: MutationResolvers['deleteCampaign'] = ({ id }) => {
  return db.campaign.delete({
    where: { id },
  })
}

export const Campaign: CampaignRelationResolvers = {
  integrations: (_obj, { root }) => {
    return db.campaign.findUnique({ where: { id: root?.id } }).integrations()
  },
}


