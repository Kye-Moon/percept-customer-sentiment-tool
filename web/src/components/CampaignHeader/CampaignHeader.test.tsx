import { render } from '@redwoodjs/testing/web'

import CampaignHeader from './CampaignHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CampaignHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CampaignHeader />)
    }).not.toThrow()
  })
})
