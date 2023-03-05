import { render } from '@redwoodjs/testing/web'

import CreateCampaignPage from './CreateCampaignPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateCampaignPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateCampaignPage />)
    }).not.toThrow()
  })
})
