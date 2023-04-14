import React, {useContext} from 'react';
import {Link, NavLink, routes} from "@redwoodjs/router";
import RectangleGroupIconFilled from "../../images/svgs/RectangleGroupIconFilled.svg"
import {SideBarMenuItem} from "./SideBarMenuItem"
import {FaceSmileIcon} from "@heroicons/react/24/outline";
import {LinkIcon} from "@heroicons/react/24/solid";
import {CampaignContext} from "src/context/CampaignContext";

function Sidebar({sidebarOpen, setSidebarOpen}) {
  const {campaign} = useContext(CampaignContext);

  return (
    campaign ? (
      <div>
        {/* Sidebar backdrop (mobile only) */}
        <div
          className={`fixed inset-0  bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden="true"
        ></div>

        {/* Sidebar */}
        <div
          id="sidebar"
          className={`flex bg-base-100 py-8 ml-28 flex-col text-white  absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-72 lg:w-72 lg:sidebar-expanded:!w-80 2xl:!w-64 shrink-0  p-4 transition-all duration-200 ease-in-out`}
        >
          {/* Sidebar header */}
          <div className="flex justify-between mb-10 pr-3 sm:px-2">
            {/* Logo */}
            <NavLink to="/" className="block" activeClassName={''}>
              Dunno Yet
            </NavLink>
          </div>

          {/* Links */}
          <div className="space-y-8">
            {/* Pages group */}
            <div>
              <ul className="mt-3  space-y-12">
                <div className={"px-2 -ml-2"}>
                  <Link className={"btn btn-sm btn-outline "} to={routes.dashboard()}> Dashboard</Link>
                </div>
                <div className="mt-3  space-y-2">
                  <h2 className={'font-semibold'}>INBOX</h2>
                  <div className={'pl-4'}>
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
                    <SideBarMenuItem Icon={LinkIcon} title={"Public landing page"} to={routes.campaignLandingPageTemplate({id:campaign.title})}/>
                  </div>
                </div>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Embeds"} to={""}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Analytics"} to={routes.yourReviews()}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Links"} to={routes.yourReviews()}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Settings"} to={routes.yourReviews()}/>
              </ul>
            </div>
          </div>

          <div className=" hidden lg:inline-flex justify-start mt-auto">
            <div className="dropdown dropdown-top">
              <label tabIndex={0} className="btn  btn-circle btn-outline">MS</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-primary rounded-box w-52">
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
