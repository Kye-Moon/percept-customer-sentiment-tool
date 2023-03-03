import type {
  CreateRecommendedMentionInput,
  MutationResolvers,
  QueryResolvers, RecommendedMention
} from 'types/graphql'

import {
  getfilteredRecommendedMentions,
  markReviewAsArchived,
  markReviewAsFavourite, markReviewAsOnWall
} from "src/lib/recommendedMentionsLib/functions";
import {
  recommeded_mention_create,
  recommeded_mention_createMany,
  recommeded_mention_findMany,
  recommeded_mention_findUnique, recommended_mention_delete, recommended_mention_update,
} from "src/lib/recommendedMentionsLib/db";

const axios = require('axios')

export const filteredRecommendedMentions: QueryResolvers['filteredRecommendedMentions'] = ({filter}) => {
  return  getfilteredRecommendedMentions(filter)
}

export const favouriteReview: MutationResolvers['favouriteReview'] =  ({id}) => {
   return markReviewAsFavourite(id)
}

export const addReviewToWall: MutationResolvers['addReviewToWall'] =  ({id}) => {
  return markReviewAsOnWall(id)
}

export const archiveReview: MutationResolvers['archiveReview'] =  ({id}) => {
  return markReviewAsArchived(id)
}

export const recommendedMentions: QueryResolvers['recommendedMentions'] = () => {
  return recommeded_mention_findMany()
}

export const recommendedMention: QueryResolvers['recommendedMention'] = ({id,}) => {
  return recommeded_mention_findUnique(id)
}

export const createManyRecommendedMentions: MutationResolvers['createManyRecommendedMentions'] = async ({input}) => {
   return recommeded_mention_createMany(input)
}

export const createRecommendedMention: MutationResolvers['createRecommendedMention'] = ({input}) => {
  return recommeded_mention_create(input)
}

export const updateRecommendedMention: MutationResolvers['updateRecommendedMention'] =
  ({id, input}) => {
    return recommended_mention_update(id,input)
  }

export const deleteRecommendedMention: MutationResolvers['deleteRecommendedMention'] =
  ({id}) => {
    return recommended_mention_delete(id)
  }


export const fetchNewRecommendedMentions: QueryResolvers['fetchNewRecommendedMentions'] = async () => {
  let mentions: CreateRecommendedMentionInput[];
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/mentions/get-new-mentions');
    mentions = response.data.map((mention) => {
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
    return createManyRecommendedMentions({input: mentions})
  } catch (error) {
    console.error(error);
  }
}
