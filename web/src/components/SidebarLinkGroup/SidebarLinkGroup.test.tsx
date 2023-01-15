import { render } from '@redwoodjs/testing/web'

import SidebarLinkGroup from './SidebarLinkGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SidebarLinkGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SidebarLinkGroup />)
    }).not.toThrow()
  })
})
