import type { ComponentMeta } from '@storybook/react'

import CampaignPage from './CampaignPage'

export const generated = () => {
  return <CampaignPage id={undefined} />
}

export default {
  title: 'Pages/CampaignPage',
  component: CampaignPage,
} as ComponentMeta<typeof CampaignPage>
