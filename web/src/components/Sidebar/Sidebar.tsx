import React, {useState, useEffect, useRef} from 'react';
import {Link, NavLink, routes} from "@redwoodjs/router";
import {useLocation} from "@redwoodjs/router";
import InboxIconFilled from "../../images/svgs/InboxIconFilled.svg"
import RectangleGroupIconFilled from "../../images/svgs/RectangleGroupIconFilled.svg"
import StarIconFilled from '../../images/svgs/StarIconFilled.svg'
import DashboardIcon from '../../images/svgs/Squares-2x2IconFilled.svg'
import {SideBarMenuItem} from "./SideBarMenuItem"
import DropdownProfile from "src/components/DropdownProfile";

function Sidebar({sidebarOpen, setSidebarOpen}) {

  const location = useLocation();
  const {pathname} = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({target}) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({keyCode}) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', String(sidebarExpanded));
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
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
        ref={sidebar}
        className={`flex bg-base-100 py-8 ml-28 flex-col text-white  absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-72 lg:w-72 lg:sidebar-expanded:!w-80 2xl:!w-64 shrink-0 bg-white p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
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
              <div className={"px-2"}>
                <Link className={"btn btn-sm btn-outline "} to={routes.dashboard()}> Dashboard</Link>
              </div>
              <div className="mt-3  space-y-6">
                <SideBarMenuItem Icon={InboxIconFilled} title={"Inbox"} to={routes.newMentions()}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Your Review Wall"} to={routes.yourReviews()}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Embeds"} to={""}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Analytics"} to={routes.yourReviews()}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Links"} to={routes.yourReviews()}/>
                <SideBarMenuItem Icon={RectangleGroupIconFilled} title={"Settings"} to={routes.yourReviews()}/>
              </div>

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
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          {/* Header: Right side */}

          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"/>
                <path className="text-slate-600" d="M3 23H1V1h2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
