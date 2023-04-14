import {MetaTags} from '@redwoodjs/web'
//@ts-ignore    Dunno here just a redwood thing with cells.
import ReviewsGridCell from "src/components/ReviewsGridCell/ReviewsGridCell";
//@ts-ignore
import CampaignHeaderCell from "src/components/CampaignHeaderCell/CampaignHeaderCell";

const CampaignPage = ({id}) => {
  return (
    <div>
      <MetaTags title="NewMentions" description="NewMentions page"/>

      <div className="px-2 sm:px-6 py-8 w-full max-w-9xl mx-auto">
        <CampaignHeaderCell id={id}/> {/* CampaignContext is set when this renders */}
        {/* Reviews */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto columns-2 md:columns-3 lg:columns-1 ">
          <ReviewsGridCell
            campaignId={id}
          />
        </div>
      </div>
    </div>
  )
}


export default CampaignPage
