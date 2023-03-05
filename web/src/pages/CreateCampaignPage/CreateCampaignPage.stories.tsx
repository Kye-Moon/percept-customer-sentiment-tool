import type { ComponentMeta } from '@storybook/react'

import CreateCampaignPage from './CreateCampaignPage'

export const generated = () => {
  return <CreateCampaignPage />
}

export default {
  title: 'Pages/CreateCampaignPage',
  component: CreateCampaignPage,
} as ComponentMeta<typeof CreateCampaignPage>
