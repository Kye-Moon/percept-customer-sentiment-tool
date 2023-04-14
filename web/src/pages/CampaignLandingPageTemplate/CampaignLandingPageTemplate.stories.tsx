import type { ComponentMeta } from '@storybook/react'

import CampaignLandingPageTemplate from './CampaignLandingPageTemplate'

export const generated = () => {
  return <CampaignLandingPageTemplate />
}

export default {
  title: 'Pages/CampaignLandingPageTemplate',
  component: CampaignLandingPageTemplate,
} as ComponentMeta<typeof CampaignLandingPageTemplate>
