// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DashboardStatisticsCard> = (args) => {
//   return <DashboardStatisticsCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DashboardStatisticsCard from './DashboardStatisticsCard'

export const generated = () => {
  return <DashboardStatisticsCard  data={{}} title={"D"}/>
}

export default {
  title: 'Components/DashboardStatisticsCard',
  component: DashboardStatisticsCard,
} as ComponentMeta<typeof DashboardStatisticsCard>
