import type { ComponentMeta } from '@storybook/react'

import EditCampaignPage from './EditCampaignPage'

export const generated = () => {
  return <EditCampaignPage />
}

export default {
  title: 'Pages/EditCampaignPage',
  component: EditCampaignPage,
} as ComponentMeta<typeof EditCampaignPage>
