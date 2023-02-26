import React from "react";
import InboxIconFilled from "src/images/svgs/InboxIconFilled.svg";
import {Link, NavLink} from "@redwoodjs/router";

interface SideBarMenuItemProps {
  title: string
  Icon: React.ElementType
  to: string
}

export const SideBarMenuItem = ({title, Icon, to}: SideBarMenuItemProps) => {
  return (
    <div>
      <Link
        className={`block text-white hover:text-primary truncate transition duration-150`} to={to} >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Icon className={"w-6 h-6"}/>
            <span
              className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              {title}
                            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
