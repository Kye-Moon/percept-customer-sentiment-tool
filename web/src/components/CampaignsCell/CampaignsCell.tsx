import type {Campaign, CampaignsQuery} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import CampaignCard from "src/components/Cards/CampaignCard/CampaignCard";

export const QUERY = gql`
  query CampaignsQuery{
    campaigns {
      id
      description
      title
      status
      updatedAt
      campaignReviews {
        review {
          status
          id
        }
      }
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
      {campaigns.map((campaign:Campaign) => {
        const newReviewsCount = campaign.campaignReviews.filter((review) => review.review.status === 'NEW').length
         return <CampaignCard
            key={campaign.id}
            campaign={campaign}
            reviewsCount={campaign.campaignReviews.length}
            newReviewsCount={newReviewsCount}
        />
      })}
      </div>
    </ul>
  )
}
