import React, {useContext} from 'react';
import {Link, NavLink, routes} from "@redwoodjs/router";
import RectangleGroupIconFilled from "../../images/svgs/RectangleGroupIconFilled.svg"
import {SideBarMenuItem} from "./SideBarMenuItem"
import {FaceSmileIcon} from "@heroicons/react/24/outline";
import {LinkIcon} from "@heroicons/react/24/solid";
import {CampaignContext} from "src/context/CampaignContext";
import PerceptLogo from '../../images/PerceptLogo.png'
import {CommandLineIcon} from "@heroicons/react/24/outline";

function Sidebar({sidebarOpen, setSidebarOpen}) {
  const {campaign} = useContext(CampaignContext);

  return (
    campaign ? (
      <div>
        {/* Sidebar */}
        <div id="sidebar"
          className={`flex space-y-8  p-8 pl-8  border-r flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen w-72 lg:w-80 transition-all duration-200 ease-in-out`}
        >
          {/* Sidebar header */}
          <div className="flex">
            {/* Logo */}
            <NavLink to="/" className="flex block" activeClassName={''}>
              <div className="flex w-12 h-12 ">
                <img src={PerceptLogo}/>
                <div className={'flex place-items-center px-2'}>
                  <h1 className={'font-semibold text-2xl '}>Percept</h1>
                </div>
              </div>
            </NavLink>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <div className={""}>
              <Link className={"btn btn-wide btn-outline btn-primary "} to={routes.dashboard()}> Dashboard</Link>
            </div>
            {/* Pages group */}
            <div className={' flex'}>
              <ul className="mt-3  space-y-12 w-full">
                <div className="mt-3  space-y-2">
                  <h2 className={'font-semibold'}>INBOX</h2>
                  <div className={'pl-4 flex flex-col'}>
                    <SideBarMenuItem
                      Icon={FaceSmileIcon}
                      title={"New"}
                      to={routes.campaign({id: parseInt(campaign.id), tab: "new"})}
                    />
                    <SideBarMenuItem
                      Icon={FaceSmileIcon}
                      title={"Recommended"}
                      to={routes.campaign({id: parseInt(campaign.id), tab: "recommended"})}
                    />
                    <SideBarMenuItem
                      Icon={RectangleGroupIconFilled}
                      title={"Favourites"}
                      to={routes.campaign({id: parseInt(campaign.id), tab: "favourites"})}
                    />
                    <SideBarMenuItem
                      Icon={RectangleGroupIconFilled}
                      title={"Archived"}
                      to={routes.campaign({id: parseInt(campaign.id), tab: "archived"})}
                    />
                    <SideBarMenuItem
                      Icon={RectangleGroupIconFilled}
                      title={"Negative"}
                      to={routes.campaign({id: parseInt(campaign.id), tab: "negative"})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className={'font-semibold'}>LINKS</h2>
                  <div className={'pl-4'}>
                    <SideBarMenuItem Icon={LinkIcon} title={"Public landing page"} to={routes.campaignLandingPageTemplate({id:campaign.landingPageSlug})}/>
                  </div>
                </div>
                <div className="space-y-2">
                  <h2 className={'font-semibold'}>EMBDEDS</h2>
                  <div className={'pl-4'}>
                    <SideBarMenuItem
                      Icon={CommandLineIcon}
                      title={"Embeddings"}
                      to={routes.campaign({id: parseInt(campaign.id), tab: "embeddings"})}
                    />
                  </div>
                </div>

              </ul>
            </div>
          </div>

          <div className="  absolute bottom-0 left-0  p-8 lg:inline-flex justify-start left-0 mt-auto">
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="btn  btn-circle btn-outline btn-primary">MS</label>
              <ul tabIndex={0} className="dropdown-content my-2 menu p-2 shadow bg-primary rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Settings</a></li>
              </ul>
            </div>
          </div>
          {/* Expand / collapse button */}
        </div>
      </div>
    ) : (<></>)
  );
}

export default Sidebar;
