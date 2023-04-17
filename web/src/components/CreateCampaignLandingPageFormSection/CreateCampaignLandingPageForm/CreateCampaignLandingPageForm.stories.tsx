// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CreateCampaignLandingPageForm> = (args) => {
//   return <CreateCampaignLandingPageForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CreateCampaignLandingPageForm from './CreateCampaignLandingPageForm'

export const generated = () => {
  return <CreateCampaignLandingPageForm />
}

export default {
  title: 'Components/CreateCampaignLandingPageForm',
  component: CreateCampaignLandingPageForm,
} as ComponentMeta<typeof CreateCampaignLandingPageForm>
