import type {FindCampaignHeaderQuery, FindCampaignHeaderQueryVariables,} from 'types/graphql'
import type {CellFailureProps, CellSuccessProps} from '@redwoodjs/web'
import CreateReviewEmbedding from "src/components/CreateReviewEmbedding/CreateReviewEmbedding";
import CampaignHeader from "src/components/CampaignHeader/CampaignHeader";
//@ts-ignore
import ReviewsGridCell from "src/components/ReviewsGridCell/ReviewsGridCell";
import {useParams} from "@redwoodjs/router";

export const QUERY = gql`
  query FindCampaignHeaderQuery($id: Int!) {
    campaign: campaign(id: $id) {
      id
      title
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<FindCampaignHeaderQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({campaign}: CellSuccessProps<FindCampaignHeaderQuery, FindCampaignHeaderQueryVariables>) => {
  const InboxTabs = ['new', 'recommended', 'favourites', 'archived']
  const {tab} = useParams()
  return (
    <div className="px-2 sm:px-6 py-8 w-full max-w-9xl mx-auto">
      <CampaignHeader title={campaign.title} campaignId={campaign.id} description={campaign.description}/>
      {/* Reviews */}
      <div className={'divider'}></div>
      {(InboxTabs.includes(tab)) &&
        <div className="py-8 w-full max-w-9xl mx-auto  xs:columns-1 lg:columns-2 ">
          <ReviewsGridCell
            campaignId={campaign.id}
          />
        </div>
      }
      {(tab === 'embeddings') &&  <CreateReviewEmbedding/>}
    </div>
  )
}
