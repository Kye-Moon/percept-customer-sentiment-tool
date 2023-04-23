import {MetaTags} from '@redwoodjs/web'
//@ts-ignore    Dunno here just a redwood thing with cells.
import ReviewsGridCell from "src/components/ReviewsGridCell/ReviewsGridCell";
//@ts-ignore
import CampaignHeaderCell from "src/components/CampaignHeaderCell/CampaignHeaderCell";
import {useParams} from "@redwoodjs/router";
import CreateReviewEmbedding from "src/components/CreateReviewEmbedding/CreateReviewEmbedding";

const CampaignPage = ({id}) => {
  const InboxTabs = ['new', 'recommended', 'favourites', 'archived']

  const {tab} = useParams()
  return (
    <div>
      <MetaTags title="NewMentions" description="NewMentions page"/>
      <div className="px-2 sm:px-6 py-8 w-full max-w-9xl mx-auto">
        <CampaignHeaderCell id={id}/> {/* CampaignContext is set when this renders */}
        {/* Reviews */}
        <div className={'divider'}></div>
        {(InboxTabs.includes(tab)) &&
        <div className="py-8 w-full max-w-9xl mx-auto columns-2 md:columns-2">
            <ReviewsGridCell
              campaignId={id}
            />
        </div>
        }
        {(tab === 'embeddings') &&  <CreateReviewEmbedding/>}
      </div>
    </div>
  )
}


export default CampaignPage
