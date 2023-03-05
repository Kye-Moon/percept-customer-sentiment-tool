import type { Prisma, CampaignIntegration } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CampaignIntegrationCreateArgs>({
  campaignIntegration: {
    one: {
      data: {
        updatedAt: '2023-03-04T09:08:30.958Z',
        campaign: {
          create: {
            updatedAt: '2023-03-04T09:08:30.958Z',
            userId: 'String1886658',
            title: 'String',
            description: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-03-04T09:08:30.958Z',
        campaign: {
          create: {
            updatedAt: '2023-03-04T09:08:30.958Z',
            userId: 'String2088081',
            title: 'String',
            description: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CampaignIntegration,
  'campaignIntegration'
>
