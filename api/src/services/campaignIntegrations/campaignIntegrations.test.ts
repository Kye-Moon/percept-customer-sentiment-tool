import type { CampaignIntegration } from '@prisma/client'

import {
  campaignIntegrations,
  campaignIntegration,
  createCampaignIntegration,
  updateCampaignIntegration,
  deleteCampaignIntegration,
} from './campaignIntegrations'
import type { StandardScenario } from './campaignIntegrations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('campaignIntegrations', () => {
  scenario(
    'returns all campaignIntegrations',
    async (scenario: StandardScenario) => {
      const result = await campaignIntegrations()

      expect(result.length).toEqual(
        Object.keys(scenario.campaignIntegration).length
      )
    }
  )

  scenario(
    'returns a single campaignIntegration',
    async (scenario: StandardScenario) => {
      const result = await campaignIntegration({
        id: scenario.campaignIntegration.one.id,
      })

      expect(result).toEqual(scenario.campaignIntegration.one)
    }
  )

  scenario(
    'creates a campaignIntegration',
    async (scenario: StandardScenario) => {
      const result = await createCampaignIntegration({
        input: {
          campaignId: scenario.campaignIntegration.two.campaignId,
          updatedAt: '2023-03-04T09:08:30.926Z',
        },
      })

      expect(result.campaignId).toEqual(
        scenario.campaignIntegration.two.campaignId
      )
      expect(result.updatedAt).toEqual(new Date('2023-03-04T09:08:30.926Z'))
    }
  )

  scenario(
    'updates a campaignIntegration',
    async (scenario: StandardScenario) => {
      const original = (await campaignIntegration({
        id: scenario.campaignIntegration.one.id,
      })) as CampaignIntegration
      const result = await updateCampaignIntegration({
        id: original.id,
        input: { updatedAt: '2023-03-05T09:08:30.927Z' },
      })

      expect(result.updatedAt).toEqual(new Date('2023-03-05T09:08:30.927Z'))
    }
  )

  scenario(
    'deletes a campaignIntegration',
    async (scenario: StandardScenario) => {
      const original = (await deleteCampaignIntegration({
        id: scenario.campaignIntegration.one.id,
      })) as CampaignIntegration
      const result = await campaignIntegration({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
