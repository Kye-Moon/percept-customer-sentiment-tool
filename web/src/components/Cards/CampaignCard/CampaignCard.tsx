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
      <div className="card shadow-2xl bg-white/75  hover:bg-primary hover:text-white ">
        <div className="card-body">
          <div className={'flex justify-between'}>
            <div className={"pb-3"}>
              <h2 className="card-title pb-3 text-2xl">{campaign.title}</h2>
              <p className="card-title pb-3 text-lg">{campaign.description}</p>
            </div>
          </div>
          <div className={"py-4 space-x-4 w-1/2 "}>
            <span className="badge badge-primary badge-lg">Total: {reviewsCount} </span>
            <span className="badge badge-secondary badge-lg">New:{newReviewsCount} </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CampaignCard
