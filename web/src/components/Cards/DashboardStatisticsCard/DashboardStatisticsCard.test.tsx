import { render } from '@redwoodjs/testing/web'

import DashboardStatisticsCard from './DashboardStatisticsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardStatisticsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardStatisticsCard  data={""} title={""}/>)
    }).not.toThrow()
  })
})
