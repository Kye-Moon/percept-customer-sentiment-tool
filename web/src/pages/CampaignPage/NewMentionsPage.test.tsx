import { render } from '@redwoodjs/testing/web'

import CampaignPage from './CampaignPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CampaignPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CampaignPage id={undefined} />)
    }).not.toThrow()
  })
})
