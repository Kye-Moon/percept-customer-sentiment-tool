import Sidebar from "src/components/Sidebar/Sidebar";
import {useMemo, useState} from "react";
import {CampaignContext} from "src/context/CampaignContext";
import {useParams} from "@redwoodjs/router";
import {useLazyQuery} from "@apollo/client";

type AppLayoutProps = {
  children?: React.ReactNode
}
export const QUERY = gql`
  query FindCampaignHeaderQuery($id: Int!) {
    campaign: campaign(id: $id) {
      id
      title
      description
    }
  }
`

const AppLayout = ({children}: AppLayoutProps) => {
  const {id} = useParams()
  const [campaign, setCampaign] = useState(undefined)

  const [getCampaign, {loading}] = useLazyQuery(QUERY, {
    variables: {id: id},
  });

   useMemo(() =>
     getCampaign().then(r => {
       setCampaign(r.data.campaign)
     }).catch(e => {
       console.log(e)
     }), [id]
   )

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <>
    <CampaignContext.Provider value={{campaign}}>
      {
        loading
          ? (
            <div className={'flex space-x-12 h-screen place-items-center justify-center'}>
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-primary/50"></span>
              </span>
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-primary/50"></span>
              </span>
              <span className="relative flex h-8 w-8">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-8 w-8 bg-primary/50"></span>
              </span>

            </div>

          ) : (
            <div className="flex h-screen overflow-x-hidden">
              {/* Sidebar */}
              <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
              <div className="relative flex flex-col flex-1 pr-36 px-12 bg-base-100 overflow-y-auto overflow-x-hidden">
                {children}
              </div>
            </div>
          )
      }
    </CampaignContext.Provider>
  </>

}

export default AppLayout
