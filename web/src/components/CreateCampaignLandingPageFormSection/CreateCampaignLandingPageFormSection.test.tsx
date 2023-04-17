import { render } from '@redwoodjs/testing/web'

import CreateCampaignLandingPageFormSection from './CreateCampaignLandingPageFormSection'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateCampaignLandingPageFormSection', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateCampaignLandingPageFormSection />)
    }).not.toThrow()
  })
})
