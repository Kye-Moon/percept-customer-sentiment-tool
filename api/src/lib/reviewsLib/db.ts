import {db} from "src/lib/utils/db";
import {CreateReviewInput, UpdateReviewInput} from "types/graphql";

export const review_findManyWhere = (filter) => {
  return db.review.findMany({
    where: filter
  })
}
export const review_findMany = () => {
  return db.review.findMany()
}

export const review_findUnique = (id:number) => {
  return db.review.findUnique({
    where: {id},
  })
}

export const review_create = (input:NonNullable<CreateReviewInput>) => {
  return db.review.create({
    data: input,
  })
}

export const review_createMany = (input:CreateReviewInput[]) => {
  return db.review.createMany({
    data: input,
    skipDuplicates: true,
  })
}

export const review_delete = (id:number) => {
  return db.review.delete({
    where: {id},
  })
}

export const review_update = (id:number, input:NonNullable<UpdateReviewInput>) => {
  return db.review.update({
    data: input,
    where: {id},
  })
}
