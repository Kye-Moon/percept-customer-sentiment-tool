import { render } from '@redwoodjs/testing/web'

import WelcomeBanner from './WelcomeBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WelcomeBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WelcomeBanner />)
    }).not.toThrow()
  })
})
