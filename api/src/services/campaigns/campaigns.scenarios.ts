import type { Prisma, Campaign } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CampaignCreateArgs>({
  campaign: {
    one: {
      data: {
        updatedAt: '2023-03-04T09:09:10.976Z',
        userId: 'String2277607',
        title: 'String',
        description: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-03-04T09:09:10.976Z',
        userId: 'String2557713',
        title: 'String',
        description: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Campaign, 'campaign'>
