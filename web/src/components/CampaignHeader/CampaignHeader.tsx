const CampaignHeader = ({campaign}) => {
  return (
    <div className="sm:flex sm:justify-between sm:items-center mb-8 mt-8">

      {/* Left: Title */}
      <div className="mb-4 sm:mb-0 py-8 space-y-2 ">
        <h1 className="text-2xl md:text-7xl text-primary font-bold">{campaign.title}</h1>
        <h1 className="text-xl md:text-xl  font-bold">{campaign.description}</h1>
      </div>

      {/* Right: Actions */}
      <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        {/* Add board button */}
        <button className={"btn btn-outline btn-primary"}>Edit Campaign</button>
      </div>
    </div>
  )
}

export default CampaignHeader
