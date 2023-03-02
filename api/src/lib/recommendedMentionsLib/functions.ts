
import {recommendedMention, updateRecommendedMention} from "src/services/recommendedMentions/recommendedMentions";
import {
  recommeded_mention_findManyWhere,
  recommeded_mention_findUnique,
  recommended_mention_update
} from "src/lib/recommendedMentionsLib/db";

export const getfilteredRecommendedMentions = (filterType) => {
  let filter
  switch (filterType) {
    case "ALL":{
      filter = {
        archived:false,
        favourite:false,
        onWall:false
      }
      break
    }
    case "ARCHIVED": {
      filter = {
        archived: true,
      }
      break;
    }
    case "FAVOURITE": {
      filter = {
        favourite: true,
      }
      break;
    }
    case "ONWALL": {
      filter = {
        onWall: true
      }
      break;
    }
  }
  return recommeded_mention_findManyWhere(filter)
}

export const markReviewAsFavourite = async (id: number) => {
  let mention = await recommeded_mention_findUnique(id)
  mention.favourite = true
  mention.archived = false
  mention.onWall = false
  return recommended_mention_update(id,mention);
}

export const markReviewAsArchived = async (id: number) => {
  let mention = await recommeded_mention_findUnique(id)
  mention.archived = true
  mention.favourite = false
  mention.onWall = false
  return recommended_mention_update(id,mention);
}

export const markReviewAsOnWall = async (id: number) => {
  let mention = await recommeded_mention_findUnique(id)
  mention.onWall = true
  mention.favourite = false
  mention.archived = false
  return recommended_mention_update(id,mention);
}

