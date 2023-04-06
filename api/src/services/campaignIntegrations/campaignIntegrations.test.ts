import type { CampaignIntegration } from '@prisma/client'

const campaignIntegrations = require('./campaignIntegrations')

import type { StandardScenario } from './campaignIntegrations.scenarios'
import {db} from "src/lib/utils/db";
const axios = require('axios')
jest.mock('axios')


describe('campaignIntegrations', () => {

  it('should call sendIntegrationRequest', async function () {
    axios.post.mockResolvedValue({status: 200})
    jest.spyOn(campaignIntegrations, 'sendIntegrationRequest')

    const campaign = await db.campaign.create({
      data: {
        userId: "1",
        title: "test-title",
        description: "test",
      }
    })
    const input = {
      campaignId: campaign.id,
      productHuntReviewsUrl: 'https://example.com',
    }

    const results = await campaignIntegrations.createCampaignIntegration({input})
    expect(axios.post).toHaveBeenCalled()
    expect(results.campaignId).toEqual(input.campaignId)
    expect(results.productHuntReviewsUrl).toEqual(input.productHuntReviewsUrl)
  });
})


/*
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
      input: {  },
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
)*/
