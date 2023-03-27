/*
import type { RecommendedMention } from '@prisma/client'


import type { StandardScenario } from './reviews.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('reviews', () => {
  scenario(
    'returns all reviews',
    async (scenario: StandardScenario) => {
      const result = await reviews()

      expect(result.length).toEqual(
        Object.keys(scenario.recommendedMention).length
      )
    }
  )

  scenario(
    'returns a single recommendedMention',
    async (scenario: StandardScenario) => {
      const result = await review({
        id: scenario.recommendedMention.one.id,
      })

      expect(result).toEqual(scenario.recommendedMention.one)
    }
  )

  scenario('creates a recommendedMention', async () => {
    const result = await createRecommendedMention({
      input: {
        createAt: 'String',
        externalReference: 'String4244555',
        body: 'String',
        mentionSource: 'String',
        username: 'String',
        userDescription: 'String',
        profileImageUrl: 'String',
      },
    })

    expect(result.createAt).toEqual('String')
    expect(result.externalReference).toEqual('String4244555')
    expect(result.body).toEqual('String')
    expect(result.mentionSource).toEqual('String')
    expect(result.username).toEqual('String')
    expect(result.userDescription).toEqual('String')
    expect(result.profileImageUrl).toEqual('String')
  })

  scenario(
    'updates a recommendedMention',
    async (scenario: StandardScenario) => {
      const original = (await recommendedMention({
        id: scenario.recommendedMention.one.id,
      })) as RecommendedMention
      const result = await updateRecommendedMention({
        id: original.id,
        input: { createAt: 'String2' },
      })

      expect(result.createAt).toEqual('String2')
    }
  )

  scenario(
    'deletes a recommendedMention',
    async (scenario: StandardScenario) => {
      const original = (await deleteRecommendedMention({
        id: scenario.recommendedMention.one.id,
      })) as RecommendedMention
      const result = await recommendedMention({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
*/
