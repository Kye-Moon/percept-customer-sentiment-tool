import React from "react";
import {NavLink} from "@redwoodjs/router";

interface SideBarMenuItemProps {
  title: string
  Icon: React.ElementType
  to: string
}

export const SideBarMenuItem = ({title, Icon, to}: SideBarMenuItemProps) => {
  return (
    <div className={''}>
      <NavLink
        className={`block   hover:bg-accent/50 truncate px-2 rounded-lg`} to={to}
        activeClassName={"text-white bg-primary"}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon className={"w-3 h-3"}/>
            <span
              className="text-lg font-medium ml-3  lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {title}
             </span>
          </div>
        </div>
      </NavLink>
    </div>
  )
}
