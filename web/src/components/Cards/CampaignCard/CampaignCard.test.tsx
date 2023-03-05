import { render } from '@redwoodjs/testing/web'

import CampaignCard from './CampaignCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CampaignCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CampaignCard />)
    }).not.toThrow()
  })
})
