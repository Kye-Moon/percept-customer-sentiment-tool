import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './integrationConsumer'
import AWS from 'aws-sdk';
import { mock } from 'jest-mock-extended'
import {Context, DynamoDBStreamEvent} from "aws-lambda";
import {db} from "src/lib/db";

jest.mock('aws-sdk')

describe('integrationConsumer function', () => {
  jest.setTimeout(15000)
  it('Should respond with 200', async () => {
    //Given
    const campaign = await db.campaign.create({
      data: {
        userId: "123",
        status: "DRAFT",
        title: "title",
        description: "description",
      }
    })
    const testEvent = buildTestEvent(campaign)

    //WHEN
    await handler(testEvent, mock<Context>())

    //THEN
    const reviews = await db.review.findMany()
    const campaignReviews = await db.campaignReview.findMany()

    expect(reviews.length).toBe(1)
    expect(campaignReviews.length).toBe(1)
    expect(campaignReviews[0].campaignId).toBe(campaign.id)
  })

  // You can also use scenarios to test your api functions
  // See guide here: https://redwoodjs.com/docs/testing#scenarios
  //
  // scenario('Scenario test', async () => {
  //
  // })
})

const buildTestEvent = (campaign):DynamoDBStreamEvent => {
  return {
    Records: [
      {
        "eventID": "7bda97ecf00981f63095109f3441cace",
        "eventName": "INSERT",
        "eventVersion": "1.1",
        "eventSource": "aws:dynamodb",
        "awsRegion": "ap-southeast-2",
        "dynamodb": {
          "ApproximateCreationDateTime": 1679911108,
          "Keys": {
            "SK": {
              "S": `123456#${campaign.id}`
            },
            "PK": {
              "S": "Blah#blah"
            }
          },
          "NewImage": {
            "item": {
              "M": {
                "source": {
                  "S": "source"
                },
                "body": {
                  "S": "body"
                },
                "profileImageUrl": {
                  "S": "profileImageUrl"
                },
                "createAt": {
                  "S": "createAt"
                },
                "username": {
                  "S": "username"
                }
              }
            },
            "SK": {
              "S": `123456#${campaign.id}`
            },
            "PK": {
              "S": "Blah#blah"
            }
          },
          "SequenceNumber": "9835700000000015482785142",
          "SizeBytes": 132,
          "StreamViewType": "NEW_IMAGE"
        },
        "eventSourceARN": "arn:aws:dynamodb:ap-southeast-2:072279413246:table/mentions/stream/2023-03-25T05:43:08.573"
      },
    ]
  }
}
