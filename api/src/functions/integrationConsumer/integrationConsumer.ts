import type {SQSEvent, Context, DynamoDBStreamEvent} from 'aws-lambda'
import {db} from "src/lib/utils/db";


interface ReviewDto {
  campaignId: string
  createAt: string
  externalReference: string
  body: string
  mentionSource: string
  username: string
  userDescription: string
  profileImageUrl: string
}

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: DynamoDBStreamEvent, context: Context) => {
  console.log("consumer invoked")
  await db.$connect()
  for (const record of event.Records) {
    const sortkey = record.dynamodb.NewImage.SK.S
    const externalReference = sortkey.split("#")[0]
    const campaignId = sortkey.split("#")[1]
    console.log(campaignId)
    const mention = record.dynamodb.NewImage.item.M
    //const campaignId = mention.campaignId.S // need to add campaignId to the mention
    const review: ReviewDto = {
      campaignId: campaignId,
      body: mention.body.S,
      createAt: mention.createAt.S,
      externalReference: externalReference,
      mentionSource: mention.source.S,
      userDescription: "TODO",
      profileImageUrl: mention.profileImageUrl.S,
      username: mention.username.S
    }
    try {
      const saved = await db.review.create({
        data: {
          body: review.body,
          createAt: review.createAt,
          externalReference: review.externalReference,
          mentionSource: review.mentionSource,
          userDescription: review.userDescription,
          profileImageUrl: review.profileImageUrl,
          username: review.username,
          campaigns:{
            create: {
              campaign:{
                connect:{id:parseInt(campaignId)}
              }
            }
          }
        }
      })
      console.log("saved", saved)
    }catch (e) {
      console.log(e)
    }
  }
  db.$disconnect()
}

