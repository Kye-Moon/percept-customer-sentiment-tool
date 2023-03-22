import type { Prisma, Campaign } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CampaignCreateArgs>({
  campaign: {
    one: {
      data: {
        updatedAt: '2023-03-05T09:33:51.278Z',
        userId: 'String',
        title: 'String',
        description: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2023-03-05T09:33:51.278Z',
        userId: 'String',
        title: 'String',
        description: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Campaign, 'campaign'>
