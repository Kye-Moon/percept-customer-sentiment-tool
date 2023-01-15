// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof WelcomeBanner> = (args) => {
//   return <WelcomeBanner {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import WelcomeBanner from './WelcomeBanner'

export const generated = () => {
  return <WelcomeBanner />
}

export default {
  title: 'Components/WelcomeBanner',
  component: WelcomeBanner,
} as ComponentMeta<typeof WelcomeBanner>
