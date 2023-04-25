import type {Campaign, CampaignsQuery} from 'types/graphql'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import CampaignCard from "src/components/Cards/CampaignCard/CampaignCard";
import {LoadingPulseDots} from "src/components/Loading/LoadingPulseDots";

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

export const Loading = () => {
  return (
    <div>
      <div className={'flex space-x-12  py-12 place-items-center justify-center'}>
        <LoadingPulseDots numberOfDots={3}/>
      </div>
    </div>
  )
}


export const Empty = () => <div>Empty</div>

export const Failure = ({error}: CellFailureProps) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({campaigns}: CellSuccessProps<CampaignsQuery>) => {

  return (
    <ul>
      <div className="grid grid-cols-3 gap-6">
        {campaigns.map((campaign: Campaign) => {
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
