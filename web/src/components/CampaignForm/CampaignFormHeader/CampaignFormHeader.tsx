import {Link, routes} from "@redwoodjs/router";
import React from "react";

export interface CampaignFormHeaderProps {
  actionType: string
}
export const CampaignFormHeader = ({actionType}:CampaignFormHeaderProps) => {
  const title = actionType === 'create' ? 'Create Campaign' : 'Edit Campaign'
  return (
    <>
      <div className={'flex justify-between'}>
        <h1 className={"text-3xl font-bold"}>{title}</h1>
        <Link to={routes.dashboard()} className={"btn btn-outline  space-x-2"}>
          <h3>Dashboard</h3>
        </Link>
      </div>
      <div className={"divider"}></div>
    </>
  )
}
