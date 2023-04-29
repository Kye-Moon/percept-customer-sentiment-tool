//@ts-ignore
import CreateEditCampaignCell from "src/components/CreateEditCampaignCell/CreateEditCampaignCell";
import Header from "src/components/Header/Header";
import {MetaTags} from '@redwoodjs/web'

import {Campaign} from "types/graphql";
import {CampaignFormSection} from "src/components/CampaignForm/CampaignFormSection/CampaignFormSection";

const CreateCampaignPage = ({id, action}) => {


  return (
    <>
      <MetaTags title="CreateCampaign" description="CreateCampaign page"/>
      <Header sidebarOpen={undefined} setSidebarOpen={undefined}/>
      <CampaignFormSection />
    </>
  )
}

export default CreateCampaignPage
