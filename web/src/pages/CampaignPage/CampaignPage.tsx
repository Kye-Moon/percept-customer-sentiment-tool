import {MetaTags} from '@redwoodjs/web'
//@ts-ignore    Dunno here just a redwood thing with cells.
import CampaignCell from "src/components/CampaignCell/CampaignCell";

const CampaignPage = ({id}) => {

  return (
    <div>
      <MetaTags title="NewMentions" description="NewMentions page"/>
      <CampaignCell id={id}/>
    </div>
  )
}


export default CampaignPage
