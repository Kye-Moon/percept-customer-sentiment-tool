import {db} from "src/lib/db";
import {CreateRecommendedMentionInput, UpdateRecommendedMentionInput} from "types/graphql";



export const recommeded_mention_findManyWhere = (filter) => {
  return db.recommended_mention.findMany({
    where: filter
  })
}
export const recommeded_mention_findMany = () => {
  return db.recommended_mention.findMany()
}

export const recommeded_mention_findUnique = (id:number) => {
  return db.recommended_mention.findUnique({
    where: {id},
  })
}

export const recommeded_mention_create = (input:NonNullable<CreateRecommendedMentionInput>) => {
  return db.recommended_mention.create({
    data: input,
  })
}

export const recommeded_mention_createMany = (input:CreateRecommendedMentionInput[]) => {
  return db.recommended_mention.createMany({
    data: input,
    skipDuplicates: true,
  })
}

export const recommended_mention_delete = (id:number) => {
  return db.recommended_mention.delete({
    where: {id},
  })
}

export const recommended_mention_update = (id:number, input:NonNullable<UpdateRecommendedMentionInput>) => {
  return db.recommended_mention.update({
    data: input,
    where: {id},
  })
}
