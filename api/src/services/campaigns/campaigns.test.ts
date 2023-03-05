import type { Campaign } from '@prisma/client'

import {
  campaigns,
  campaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} from './campaigns'
import type { StandardScenario } from './campaigns.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('campaigns', () => {
  scenario('returns all campaigns', async (scenario: StandardScenario) => {
    const result = await campaigns()

    expect(result.length).toEqual(Object.keys(scenario.campaign).length)
  })

  scenario('returns a single campaign', async (scenario: StandardScenario) => {
    const result = await campaign({ id: scenario.campaign.one.id })

    expect(result).toEqual(scenario.campaign.one)
  })

  scenario('creates a campaign', async () => {
    const result = await createCampaign({
      input: {
        updatedAt: '2023-03-04T09:09:10.935Z',
        userId: 'String2927589',
        title: 'String',
        description: 'String',
      },
    })

    expect(result.updatedAt).toEqual(new Date('2023-03-04T09:09:10.935Z'))
    expect(result.userId).toEqual('String2927589')
    expect(result.title).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a campaign', async (scenario: StandardScenario) => {
    const original = (await campaign({
      id: scenario.campaign.one.id,
    })) as Campaign
    const result = await updateCampaign({
      id: original.id,
      input: { updatedAt: '2023-03-05T09:09:10.935Z' },
    })

    expect(result.updatedAt).toEqual(new Date('2023-03-05T09:09:10.935Z'))
  })

  scenario('deletes a campaign', async (scenario: StandardScenario) => {
    const original = (await deleteCampaign({
      id: scenario.campaign.one.id,
    })) as Campaign
    const result = await campaign({ id: original.id })

    expect(result).toEqual(null)
  })
})
