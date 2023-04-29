import {Link, routes} from "@redwoodjs/router"
import {CreateEditAction} from "src/interfaces";

interface CampaignHeaderProps {
  title: string
  description: string
  campaignId: number
}
const CampaignHeader = ({title,description,campaignId}:CampaignHeaderProps) => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center mb-8 mt-8">

      {/* Left: Title */}
      <div className="mb-4 sm:mb-0 py-8 space-y-2 ">
        <h1 className="text-4xl md:text-7xl text-primary font-bold">{title}</h1>
        <h1 className="text-2xl md:text-xl  font-bold">{description}</h1>
      </div>

      {/* Right: Actions */}
      <div className="grid grid-flow-col md:columns-1 justify-start md:justify-end gap-2">
        {/* Add board button */}
        <Link to={routes.editCampaign({id:campaignId})}>
          <button className={"btn btn-outline btn-primary btn-sm md:btn-md"}>Edit Campaign</button>
        </Link>

      </div>
    </div>
  )
}

export default CampaignHeader
