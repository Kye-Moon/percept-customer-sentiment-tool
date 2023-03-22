import type { Prisma, CampaignReview } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CampaignReviewCreateArgs>({
  campaignReview: {
    one: {
      data: {
        campaign: {
          create: {
            updatedAt: '2023-03-05T08:55:36.561Z',
            userId: 'String',
            title: 'String',
            description: 'String',
          },
        },
        review: {
          create: {
            createAt: 'String',
            externalReference: 'String9881817',
            body: 'String',
            mentionSource: 'String',
            username: 'String',
            profileImageUrl: 'String',
          },
        },
      },
    },
    two: {
      data: {
        campaign: {
          create: {
            updatedAt: '2023-03-05T08:55:36.561Z',
            userId: 'String',
            title: 'String',
            description: 'String',
          },
        },
        review: {
          create: {
            createAt: 'String',
            externalReference: 'String9155059',
            body: 'String',
            mentionSource: 'String',
            username: 'String',
            profileImageUrl: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CampaignReview, 'campaignReview'>
