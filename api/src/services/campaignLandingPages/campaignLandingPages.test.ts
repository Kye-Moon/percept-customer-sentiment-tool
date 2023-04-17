import type { CampaignLandingPage } from '@prisma/client'

import {
  campaignLandingPages,
  campaignLandingPage,
  createCampaignLandingPage,
  updateCampaignLandingPage,
  deleteCampaignLandingPage,
} from './campaignLandingPages'
import type { StandardScenario } from './campaignLandingPages.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('campaignLandingPages', () => {
  scenario(
    'returns all campaignLandingPages',
    async (scenario: StandardScenario) => {
      const result = await campaignLandingPages()

      expect(result.length).toEqual(
        Object.keys(scenario.campaignLandingPage).length
      )
    }
  )

  scenario(
    'returns a single campaignLandingPage',
    async (scenario: StandardScenario) => {
      const result = await campaignLandingPage({
        id: scenario.campaignLandingPage.one.id,
      })

      expect(result).toEqual(scenario.campaignLandingPage.one)
    }
  )

  scenario(
    'creates a campaignLandingPage',
    async (scenario: StandardScenario) => {
      const result = await createCampaignLandingPage({
        input: {
          campaignId: scenario.campaignLandingPage.two.campaignId,
          campaignSlug: 'String4110277',
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
          updatedAt: '2023-04-15T00:33:47.804Z',
        },
      })

      expect(result.campaignId).toEqual(
        scenario.campaignLandingPage.two.campaignId
      )
      expect(result.campaignSlug).toEqual('String4110277')
      expect(result.PageTitle).toEqual('String')
      expect(result.pageMessage).toEqual('String')
      expect(result.questionOne).toEqual('String')
      expect(result.questionTwo).toEqual('String')
      expect(result.questionThree).toEqual('String')
      expect(result.questionFour).toEqual('String')
      expect(result.LogoUrl).toEqual('String')
      expect(result.primaryColor).toEqual('String')
      expect(result.secondaryColor).toEqual('String')
      expect(result.textColor).toEqual('String')
      expect(result.updatedAt).toEqual(new Date('2023-04-15T00:33:47.804Z'))
    }
  )

  scenario(
    'updates a campaignLandingPage',
    async (scenario: StandardScenario) => {
      const original = (await campaignLandingPage({
        id: scenario.campaignLandingPage.one.id,
      })) as CampaignLandingPage
      const result = await updateCampaignLandingPage({
        id: original.id,
        input: { campaignSlug: 'String6485142' },
      })

      expect(result.campaignSlug).toEqual('String6485142')
    }
  )

  scenario(
    'deletes a campaignLandingPage',
    async (scenario: StandardScenario) => {
      const original = (await deleteCampaignLandingPage({
        id: scenario.campaignLandingPage.one.id,
      })) as CampaignLandingPage
      const result = await campaignLandingPage({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
