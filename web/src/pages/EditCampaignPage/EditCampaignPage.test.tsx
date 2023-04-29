import { render } from '@redwoodjs/testing/web'

import EditCampaignPage from './EditCampaignPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditCampaignPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditCampaignPage />)
    }).not.toThrow()
  })
})
