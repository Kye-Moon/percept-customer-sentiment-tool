import type {
  CreateRecommendedMentionInput,
  MutationResolvers,
  QueryResolvers
} from 'types/graphql'

import {db} from 'src/lib/db'

const axios = require('axios')

export const filteredRecommendedMentions: QueryResolvers['filteredRecommendedMentions'] = ({filter,filterValue}) => {
  let filterType;
  switch(filter) {
    case "ARCHIVED": {
      filterType= {archived:filterValue}
      break;
    }
    case "FAVOURITE": {
      filterType= {favourite:filterValue}
      break;
    }
    case "ONWALL": {
      filterType= {onWall:filterValue}
      break;
    }
  }
  return db.recommended_mention.findMany({
    where: filterType
  })
}

export const fetchNewRecommendedMentions: QueryResolvers['fetchNewRecommendedMentions'] = async () => {
  let mentions: CreateRecommendedMentionInput[];
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/mentions/get-new-mentions');
    mentions =  response.data.map((mention) => {
      return {
        createAt: mention.created_at,
        externalReference: mention.id,
        body: mention.full_text,
        mentionSource: mention.source_name,
        username: mention.user.screen_name,
        userDescription: mention.user.description,
        profileImageUrl: mention.user.profile_image_url
      } as CreateRecommendedMentionInput
    })
    return createManyRecommendedMentions({input:mentions})
  } catch (error) {
    console.error(error);
  }
}

export const favouriteReview: MutationResolvers['favouriteReview'] =
  async ({id}) => {
    let mention = await recommendedMention({id: id})
    mention.favourite = true
    return updateRecommendedMention({id: id, input: mention});
  }
// ########################## CRUD BELOW #############################################################################
export const recommendedMentions: QueryResolvers['recommendedMentions'] = () => {
  return db.recommended_mention.findMany()
}

export const recommendedMention: QueryResolvers['recommendedMention'] = ({
  id,
}) => {
  return db.recommended_mention.findUnique({
    where: { id },
  })
}

export const createManyRecommendedMentions: MutationResolvers['createManyRecommendedMentions'] = async ({input}) => {
  return await db.recommended_mention.createMany({
    data: input,
    skipDuplicates: true,
  })
}

export const createRecommendedMention: MutationResolvers['createRecommendedMention'] =
  ({ input }) => {
    return db.recommended_mention.create({
      data: input,
    })
  }

export const updateRecommendedMention: MutationResolvers['updateRecommendedMention'] =
  ({ id, input }) => {
    return db.recommended_mention.update({
      data: input,
      where: { id },
    })
  }

export const deleteRecommendedMention: MutationResolvers['deleteRecommendedMention'] =
  ({ id }) => {
    return db.recommended_mention.delete({
      where: { id },
    })
  }
