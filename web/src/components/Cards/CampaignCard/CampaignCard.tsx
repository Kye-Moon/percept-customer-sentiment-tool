import {AdjustmentsHorizontalIcon} from "@heroicons/react/24/outline";
import {Link, NavLink} from "@redwoodjs/router";

interface CampaignCardProps {
  title: string
  description:string
  newReviewsCount: number
  reviewsCount:number
}

const CampaignCard = ({}:CampaignCardProps) => {
  return (
    <Link className={""} to={""}>
    <div className="card  bg-neutral shadow-xl hover:bg-primary">
      <div className="card-body">
        <div className={'flex justify-between'}>
          <div className={"pb-3"}>
            <h2 className="card-title pb-3">Title</h2>
            <p>Description</p>
          </div>
          <AdjustmentsHorizontalIcon className={'h-6 w-6'}/>
        </div>
          <span className="badge badge-accent">New</span>
        <div className={"py-4 grid grid-cols-2 w-1/2 "}>
          <h2>Reviews: #</h2>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CampaignCard
