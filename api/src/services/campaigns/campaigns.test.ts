import type { Campaign } from '@prisma/client'

import { campaigns } from './campaigns'
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
})
