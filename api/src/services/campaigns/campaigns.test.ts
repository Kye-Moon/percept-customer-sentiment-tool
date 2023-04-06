import type { Campaign } from '@prisma/client'

import {campaigns, createCampaign} from './campaigns'
import type { StandardScenario } from './campaigns.scenarios'
import {createCampaignIntegration} from "src/services/campaignIntegrations/campaignIntegrations";

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

//mocking sendIntegrationRequestfunction only

jest.mock('src/services/campaignIntegrations/campaignIntegrations', () => ({
  sendIntegrationRequest: jest.fn(),
  createCampaignIntegration: jest.fn(),
}))

describe('campaigns', () => {
  scenario('returns all campaigns', async (scenario: StandardScenario) => {
    const result = await campaigns()

    expect(result.length).toEqual(Object.keys(scenario.campaign).length)
  })

  it("test calls createCampaignIntegration", async () => {
    const campaign = {
      userId: "1",
      title: "test-title",
      description: "test",
      integrations: {
        productHuntReviewsUrl: "test",
      }
    }
    const result = await createCampaign({input: campaign})
    expect(result.title).toEqual(campaign.title)
    expect(createCampaignIntegration).toHaveBeenCalledWith({
      input: {
        campaignId: result.id,
        productHuntReviewsUrl: "test",
      }
    })
  })
})
