

import {
  review_findManyWhere,
  review_findUnique,
  review_update
} from "src/lib/reviewsLib/db";

export const getfilteredReviews = (filterType) => {
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
  return review_findManyWhere(filter)
}

export const markReviewAsFavourite = async (id: number) => {
  let mention = await review_findUnique(id)
  mention.favourite = true
  mention.archived = false
  mention.onWall = false
  return review_update(id,mention);
}

export const markReviewAsArchived = async (id: number) => {
  let mention = await review_findUnique(id)
  mention.archived = true
  mention.favourite = false
  mention.onWall = false
  return review_update(id,mention);
}

export const markReviewAsOnWall = async (id: number) => {
  let mention = await review_findUnique(id)
  mention.onWall = true
  mention.favourite = false
  mention.archived = false
  return review_update(id,mention);
}

