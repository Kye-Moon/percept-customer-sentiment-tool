import type {MutationResolvers, QueryResolvers,} from 'types/graphql'

import {
  getfilteredReviews,
  markReviewAsArchived,
  markReviewAsFavourite,
  markReviewAsOnWall
} from "src/lib/reviewsLib/functions";
import {
  review_create,
  review_createMany,
  review_delete,
  review_findMany,
  review_findUnique,
  review_update
} from "src/lib/reviewsLib/db"
import {triggerCampaignIntegrationRequest} from "src/lib/campaignIntegrations/campaignIntegrations";

const axios = require('axios')

export const filteredReviews: QueryResolvers['filteredReviews'] = ({filter}) => {
  return  getfilteredReviews(filter)
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

export const reviews: QueryResolvers['reviews'] = () => {

  triggerCampaignIntegrationRequest(
    {
      campaignId:1,
      productHuntReviewsUrl:"fsssd",
      productHuntPostUrl:"gngng",
      twitterHandle:'nnnn',
      twitterCompanyName:"name"}
  )
  return review_findMany()
}

export const review: QueryResolvers['review'] = ({id,}) => {
  return review_findUnique(id)
}

export const createManyReviews: MutationResolvers['createManyReviews'] = async ({input}) => {
   return review_createMany(input)
}

export const createReview: MutationResolvers['createReview'] = ({input, campaignId}) => {
  return review_create(input,campaignId)
}

export const updateReview: MutationResolvers['updateReview'] =
  ({id, input}) => {
    return review_update(id,input)
  }

export const deleteReview: MutationResolvers['deleteReview'] =
  ({id}) => {
    return review_delete(id)
  }


// export const fetchNewReviews: QueryResolvers['fetchNewReviews'] = async () => {
//   let mentions: CreateReviewInput[];
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/api/mentions/get-new-mentions');
//     mentions = response.data.map((mention) => {
//       return {
//         createAt: mention.created_at,
//         externalReference: mention.id,
//         body: mention.full_text,
//         mentionSource: mention.source_name,
//         username: mention.user.screen_name,
//         userDescription: mention.user.description,
//         profileImageUrl: mention.user.profile_image_url
//       } as CreateReviewInput
//     })
//     return createManyReviews({input: mentions})
//   } catch (error) {
//     console.error(error);
//   }
// }
