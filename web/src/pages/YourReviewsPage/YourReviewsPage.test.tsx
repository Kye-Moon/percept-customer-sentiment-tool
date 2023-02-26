import { render } from '@redwoodjs/testing/web'

import YourReviewsPage from './YourReviewsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('YourReviewsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<YourReviewsPage />)
    }).not.toThrow()
  })
})
