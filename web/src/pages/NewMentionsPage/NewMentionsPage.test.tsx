import { render } from '@redwoodjs/testing/web'

import NewMentionsPage from './NewMentionsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewMentionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewMentionsPage />)
    }).not.toThrow()
  })
})
