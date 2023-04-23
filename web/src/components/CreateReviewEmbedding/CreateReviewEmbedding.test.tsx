import { render } from '@redwoodjs/testing/web'

import CreateReviewEmbedding from './CreateReviewEmbedding'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateReviewEmbedding', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateReviewEmbedding />)
    }).not.toThrow()
  })
})
