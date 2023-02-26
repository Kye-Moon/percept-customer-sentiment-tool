import type {MutationResolvers, NewRecommendedMention, QueryResolvers} from 'types/graphql'

import {db} from 'src/lib/db'
import {RecommendedMention} from "@prisma/client";
import {prismaVersion} from "@redwoodjs/api";

const axios = require('axios')

export const recommendedMentions: QueryResolvers['recommendedMentions'] =
  () => {
    return db.recommendedMention.findMany()
  }

export const recommendedMention: QueryResolvers['recommendedMention'] = ({
  id,
}) => {
  return db.recommendedMention.findUnique({
    where: { id },
  })
}
export const fetchNewRecommendedMentions: QueryResolvers['fetchNewRecommendedMentions'] = async () => {
  let mentions;
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
      } as NewRecommendedMention
    })
    const newmention =  await db.recommendedMention.createMany({
      data: mentions,
      skipDuplicates: true,
    })
    console.log(newmention)
    return newmention

  } catch (error) {
    console.error(error);
  }

}

export const createRecommendedMention: MutationResolvers['createRecommendedMention'] =
  ({ input }) => {
    return db.recommendedMention.create({
      data: input,
    })
  }

export const updateRecommendedMention: MutationResolvers['updateRecommendedMention'] =
  ({ id, input }) => {
    return db.recommendedMention.update({
      data: input,
      where: { id },
    })
  }

export const deleteRecommendedMention: MutationResolvers['deleteRecommendedMention'] =
  ({ id }) => {
    return db.recommendedMention.delete({
      where: { id },
    })
  }
