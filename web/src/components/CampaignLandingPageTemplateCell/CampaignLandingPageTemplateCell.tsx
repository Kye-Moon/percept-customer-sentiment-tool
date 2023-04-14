import type {
  FindCampaignLandingPageTemplateQuery,
  FindCampaignLandingPageTemplateQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindCampaignLandingPageTemplateQuery($id: Int!) {
    campaignLandingPageTemplate: campaignLandingPageTemplate(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindCampaignLandingPageTemplateQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  campaignLandingPageTemplate,
}: CellSuccessProps<
  FindCampaignLandingPageTemplateQuery,
  FindCampaignLandingPageTemplateQueryVariables
>) => {
  return <div>{JSON.stringify(campaignLandingPageTemplate)}</div>
}
