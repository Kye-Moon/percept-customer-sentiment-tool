import {MetaTags} from '@redwoodjs/web'
import Header from "src/components/Header/Header";
import WelcomeBanner from "src/components/WelcomeBanner/WelcomeBanner";
//@ts-ignore
import CampaignsCell from "src/components/CampaignsCell/CampaignsCell";
import {Link, routes} from "@redwoodjs/router";


const DashboardPage = () => {
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page"/>
      <div className={"flex flex-col"}>
        <Header sidebarOpen={undefined} setSidebarOpen={undefined}/>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          {/* Welcome banner */}
          <WelcomeBanner/>
          <div className={"divider"}></div>
          {/* Cards */}
          <div className={"flex justify-between py-2 mb-12 "}>
            <h1 className={"text-2xl font-semibold"}>Your Review Campaigns</h1>
            <Link className={"btn btn-primary"} to={routes.createCampaign()}>Create New Campaign</Link>
          </div>
          <CampaignsCell/>
        </div>

      </div>
    </>
  )
}

export default DashboardPage
