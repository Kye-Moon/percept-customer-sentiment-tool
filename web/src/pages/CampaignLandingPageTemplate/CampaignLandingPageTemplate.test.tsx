import { render } from '@redwoodjs/testing/web'

import CampaignLandingPageTemplate from './PublicCampaignLandingPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CampaignLandingPageTemplate', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CampaignLandingPageTemplate />)
    }).not.toThrow()
  })
})
