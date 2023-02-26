import type { ComponentMeta } from '@storybook/react'

import NewMentionsPage from './NewMentionsPage'

export const generated = () => {
  return <NewMentionsPage />
}

export default {
  title: 'Pages/NewMentionsPage',
  component: NewMentionsPage,
} as ComponentMeta<typeof NewMentionsPage>
