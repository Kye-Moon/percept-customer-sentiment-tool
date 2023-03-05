// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CampaignCard> = (args) => {
//   return <CampaignCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CampaignCard from './CampaignCard'

export const generated = () => {
  return <CampaignCard />
}

export default {
  title: 'Components/CampaignCard',
  component: CampaignCard,
} as ComponentMeta<typeof CampaignCard>
