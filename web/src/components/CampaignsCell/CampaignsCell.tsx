import type { CampaignsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import CampaignCard from "src/components/Cards/CampaignCard/CampaignCard";


export const QUERY = gql`
  query CampaignsQuery($userId:String!) {
    campaigns(userId: $userId) {
      id
      description
      title
      status
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ campaigns }: CellSuccessProps<CampaignsQuery>) => {
  return (
    <ul>
      <div className="grid grid-cols-2 gap-6">
      {campaigns.map((item) => {
        return <CampaignCard description={""} newReviewsCount={1} reviewsCount={1} title={""}/>
      })}
      </div>
    </ul>
  )
}
