import {AdjustmentsHorizontalIcon} from "@heroicons/react/24/outline";
import {Link, routes} from "@redwoodjs/router";
import {Campaign} from "types/graphql";

interface CampaignCardProps {
  campaign: Campaign
  reviewsCount: number
  newReviewsCount: number
}

const CampaignCard = ({campaign, reviewsCount, newReviewsCount}: CampaignCardProps) => {

  return (
    <Link className={""} to={routes.campaign({id: campaign.id, tab: "new"})}>
      <div className="card bg-neutral shadow-xl hover:bg-primary-content/20">
        <div className="card-body">
          <div className={'flex justify-between'}>
            <div className={"pb-3"}>
              <h2 className="card-title pb-3">{campaign.title}</h2>
              <p>{campaign.description}</p>
            </div>
            <AdjustmentsHorizontalIcon className={'h-6 w-6'}/>
          </div>
          <div className={"py-4 space-x-4 w-1/2 "}>
            <span className="badge badge-primary">Total: {reviewsCount} </span>
            <span className="badge badge-secondary">New:{newReviewsCount} </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CampaignCard
