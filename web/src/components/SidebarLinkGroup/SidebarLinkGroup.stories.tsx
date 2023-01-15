// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SidebarLinkGroup> = (args) => {
//   return <SidebarLinkGroup {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SidebarLinkGroup from './SidebarLinkGroup'

export const generated = () => {
  return <SidebarLinkGroup />
}

export default {
  title: 'Components/SidebarLinkGroup',
  component: SidebarLinkGroup,
} as ComponentMeta<typeof SidebarLinkGroup>
