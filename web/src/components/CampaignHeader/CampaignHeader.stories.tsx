// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CampaignHeader> = (args) => {
//   return <CampaignHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CampaignHeader from './CampaignHeader'

export const generated = () => {
  return <CampaignHeader />
}

export default {
  title: 'Components/CampaignHeader',
  component: CampaignHeader,
} as ComponentMeta<typeof CampaignHeader>
