import type { ComponentMeta } from '@storybook/react'

import YourReviewsPage from './YourReviewsPage'

export const generated = () => {
  return <YourReviewsPage />
}

export default {
  title: 'Pages/YourReviewsPage',
  component: YourReviewsPage,
} as ComponentMeta<typeof YourReviewsPage>
