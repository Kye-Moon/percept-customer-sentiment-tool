import type { Prisma, CampaignLandingPage } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CampaignLandingPageCreateArgs>({
  campaignLandingPage: {
    one: {
      data: {
        campaignSlug: 'String6298012',
        PageTitle: 'String',
        pageMessage: 'String',
        questionOne: 'String',
        questionTwo: 'String',
        questionThree: 'String',
        questionFour: 'String',
        LogoUrl: 'String',
        primaryColor: 'String',
        secondaryColor: 'String',
        textColor: 'String',
        updatedAt: '2023-04-15T00:33:47.850Z',
        campaign: {
          create: {
            updatedAt: '2023-04-15T00:33:47.850Z',
            userId: 'String',
            title: 'String',
            description: 'String',
          },
        },
      },
    },
    two: {
      data: {
        campaignSlug: 'String5490869',
        PageTitle: 'String',
        pageMessage: 'String',
        questionOne: 'String',
        questionTwo: 'String',
        questionThree: 'String',
        questionFour: 'String',
        LogoUrl: 'String',
        primaryColor: 'String',
        secondaryColor: 'String',
        textColor: 'String',
        updatedAt: '2023-04-15T00:33:47.850Z',
        campaign: {
          create: {
            updatedAt: '2023-04-15T00:33:47.850Z',
            userId: 'String',
            title: 'String',
            description: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  CampaignLandingPage,
  'campaignLandingPage'
>
