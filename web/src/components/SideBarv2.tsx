import PerceptLogo from "src/images/PerceptLogo.png";
import React, {useContext} from "react";
import {SideBarMenuItem} from "src/components/Sidebar/SideBarMenuItem";
import {CommandLineIcon, FaceSmileIcon} from "@heroicons/react/24/outline";
import {Link, NavLink, routes} from "@redwoodjs/router";
import RectangleGroupIconFilled from "src/images/svgs/RectangleGroupIconFilled.svg";
import {LinkIcon} from "@heroicons/react/24/solid";
import {CampaignContext} from "src/context/CampaignContext";
import Header from "src/components/Header/Header";

export const SideBarv2 = ({children}) => {
  const {campaign} = useContext(CampaignContext);
  return (
    campaign ? (
    <>



      <aside id="logo-sidebar"
             className="fixed top-0 left-0 z-40 w-80 h-screen pt-8 pl-8 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
             aria-label="Sidebar">
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

        <div className="h-full pr-8 pb-4 overflow-y-auto mt-12 space-y-8 ">

          <div className={""}>
            <Link className={"btn btn-wide btn-outline btn-primary "} to={routes.dashboard()}> Dashboard</Link>
          </div>
          <ul className="space-y-8  font-medium">
            <div className="space-y-2">
              <h2 className={'font-semibold'}>INBOX</h2>
              <div className={'pl-4 flex flex-col'}>
                <li>
                  <SideBarMenuItem
                    Icon={FaceSmileIcon}
                    title={"New"}
                    to={routes.campaign({id: parseInt(campaign.id), tab: "new"})}
                  />
                </li>
                <li>
                  <SideBarMenuItem
                    Icon={FaceSmileIcon}
                    title={"Recommended"}
                    to={routes.campaign({id: parseInt(campaign.id), tab: "recommended"})}
                  />
                </li>
                <li>
                  <SideBarMenuItem
                    Icon={RectangleGroupIconFilled}
                    title={"Favourites"}
                    to={routes.campaign({id: parseInt(campaign.id), tab: "favourites"})}
                  />
                </li>
                <li>
                  <SideBarMenuItem
                    Icon={RectangleGroupIconFilled}
                    title={"Archived"}
                    to={routes.campaign({id: parseInt(campaign.id), tab: "archived"})}
                  />

                </li>
                <li>
                  <SideBarMenuItem
                    Icon={RectangleGroupIconFilled}
                    title={"Negative"}
                    to={routes.campaign({id: parseInt(campaign.id), tab: "negative"})}
                  />
                </li>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className={'font-semibold'}>LINKS</h2>
              <div className={'pl-4'}>
                <SideBarMenuItem Icon={LinkIcon} title={"Public landing page"}
                                 to={routes.campaignLandingPageTemplate({id: campaign.id})}/>
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
      </aside>
      <div className="p-4 sm:ml-80">
        {children}
      </div>
    </>
    ) : (<></>)
  )
}
