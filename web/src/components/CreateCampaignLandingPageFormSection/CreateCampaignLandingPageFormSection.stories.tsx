// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CreateCampaignLandingPageFormSection> = (args) => {
//   return <CreateCampaignLandingPageFormSection {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CreateCampaignLandingPageFormSection from './CreateCampaignLandingPageFormSection'

export const generated = () => {
  //ßreturn <CreateCampaignLandingPageFormSection  errors={{}} register={()=>void} watch={Ω}/>
}

export default {
  title: 'Components/CreateCampaignLandingPageFormSection',
  component: CreateCampaignLandingPageFormSection,
} as ComponentMeta<typeof CreateCampaignLandingPageFormSection>
