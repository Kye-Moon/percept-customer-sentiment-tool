import {Link, routes} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import Header from "src/components/Header/Header";

import React from "react";
//@ts-ignore
import EditCampaignFormCell from "src/components/EditCampaignFormCell/EditCampaignFormCell";

const EditCampaignPage = ({id}) => {
  return (
    <>
      <MetaTags title="EditCampaign" description="EditCampaign page"/>
      <Header sidebarOpen={undefined} setSidebarOpen={undefined}/>
      <EditCampaignFormCell id={id}/>
    </>
  )
}

export default EditCampaignPage
