import type { Prisma, RecommendedMention } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecommendedMentionCreateArgs>({
  recommendedMention: {
    one: {
      data: {
        createAt: 'String',
        externalReference: 'String3310982',
        body: 'String',
        mentionSource: 'String',
        username: 'String',
        userDescription: 'String',
        profileImageUrl: 'String',
      },
    },
    two: {
      data: {
        createAt: 'String',
        externalReference: 'String4402431',
        body: 'String',
        mentionSource: 'String',
        username: 'String',
        userDescription: 'String',
        profileImageUrl: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  RecommendedMention,
  'recommendedMention'
>
