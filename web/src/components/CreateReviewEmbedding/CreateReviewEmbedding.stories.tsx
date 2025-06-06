// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CreateReviewEmbedding> = (args) => {
//   return <CreateReviewEmbedding {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CreateReviewEmbedding from './CreateReviewEmbedding'

export const generated = () => {
  return <CreateReviewEmbedding />
}

export default {
  title: 'Components/CreateReviewEmbedding',
  component: CreateReviewEmbedding,
} as ComponentMeta<typeof CreateReviewEmbedding>
