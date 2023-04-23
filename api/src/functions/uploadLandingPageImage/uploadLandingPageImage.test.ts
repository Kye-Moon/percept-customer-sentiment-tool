import { mockHttpEvent } from '@redwoodjs/testing/api'

import { handler } from './uploadLandingPageImage'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-functions

describe('uploadLandingPageImage function', () => {
  it('Should respond with 200', async () => {
    mockCurrentUser({ sub: '123' })
    const httpEvent = mockHttpEvent({
      body: JSON.stringify({
        image: 'image',
        campaignSlug: 'campaignSlug',
      }),
      isBase64Encoded: true
    })

    const response = await handler(httpEvent, null)
    const { data } = JSON.parse(response.body)

    expect(response.statusCode).toBe(200)
    expect(data).toBe('uploadLandingPageImage function')
  })

  // You can also use scenarios to test your api functions
  // See guide here: https://redwoodjs.com/docs/testing#scenarios
  //
  // scenario('Scenario test', async () => {
  //
  // })
})
