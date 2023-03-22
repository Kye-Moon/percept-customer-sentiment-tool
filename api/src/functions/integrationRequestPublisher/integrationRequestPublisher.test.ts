import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './integrationRequestPublisher'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-functions

describe('integrationRequestPublisher function', () => {
  it('Should respond with 201', async () => {
    const httpEvent = mockHttpEvent({
      queryStringParameters: {
        campaignId: "1",
        productHuntPostUrl: "productHuntPostUrl",
        productHuntReviewsUrl: "productHuntReviewsUrl",
        twitterCompanyName: "twitterCompanyName",
        companyTwitterHandle: "companyTwitterHandle",
      },
    })

    const response = await handler(httpEvent, null)

    expect(response.statusCode).toBe(201)
  })
})

