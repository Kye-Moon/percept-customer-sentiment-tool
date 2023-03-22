import type { CampaignReview } from '@prisma/client'

import {
  campaignReviews,
  campaignReview,
  createCampaignReview,
  updateCampaignReview,
  deleteCampaignReview,
} from './campaignReviews'
import type { StandardScenario } from './campaignReviews.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('campaignReviews', () => {
  scenario(
    'returns all campaignReviews',
    async (scenario: StandardScenario) => {
      const result = await campaignReviews()

      expect(result.length).toEqual(Object.keys(scenario.campaignReview).length)
    }
  )

  scenario(
    'returns a single campaignReview',
    async (scenario: StandardScenario) => {
      const result = await campaignReview({
        id: scenario.campaignReview.one.id,
      })

      expect(result).toEqual(scenario.campaignReview.one)
    }
  )

  scenario('creates a campaignReview', async (scenario: StandardScenario) => {
    const result = await createCampaignReview({
      input: {
        campaignId: scenario.campaignReview.two.campaignId,
        reviewId: scenario.campaignReview.two.reviewId,
      },
    })

    expect(result.campaignId).toEqual(scenario.campaignReview.two.campaignId)
    expect(result.reviewId).toEqual(scenario.campaignReview.two.reviewId)
  })

  scenario('updates a campaignReview', async (scenario: StandardScenario) => {
    const original = (await campaignReview({
      id: scenario.campaignReview.one.id,
    })) as CampaignReview
    const result = await updateCampaignReview({
      id: original.id,
      input: { campaignId: scenario.campaignReview.two.campaignId },
    })

    expect(result.campaignId).toEqual(scenario.campaignReview.two.campaignId)
  })

  scenario('deletes a campaignReview', async (scenario: StandardScenario) => {
    const original = (await deleteCampaignReview({
      id: scenario.campaignReview.one.id,
    })) as CampaignReview
    const result = await campaignReview({ id: original.id })

    expect(result).toEqual(null)
  })
})
