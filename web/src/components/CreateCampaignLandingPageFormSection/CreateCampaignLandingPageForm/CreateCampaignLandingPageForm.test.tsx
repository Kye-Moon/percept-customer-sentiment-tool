import { render } from '@redwoodjs/testing/web'

import CreateCampaignLandingPageForm from './CreateCampaignLandingPageForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateCampaignLandingPageForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateCampaignLandingPageForm />)
    }).not.toThrow()
  })
})
