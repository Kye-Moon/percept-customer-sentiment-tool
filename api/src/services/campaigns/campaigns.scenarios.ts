import type { Prisma, Campaign } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario({
  campaign: {
    one: {
      data: {
        createAt: '2023-03-05T09:33:51.278Z',
        updatedAt: '2023-03-05T09:33:51.278Z',
        userId: 'String',
        status: 'String',
        title: 'String',
        description: 'String',
        landingPageSlug: 'String',
      },
    },
    two: {
      data: {
        createAt: '2023-03-05T09:33:51.278Z',
        updatedAt: '2023-03-05T09:33:51.278Z',
        userId: 'String2',
        status: 'String2',
        title: 'String2',
        description: 'String2',
        landingPageSlug: 'String2',
      },
    },
  },
})
