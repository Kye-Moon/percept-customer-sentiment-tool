import {Link, routes} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import {useState} from "react";
import Sidebar from "src/components/Sidebar/Sidebar";
import Header from "src/components/Header/Header";
import WelcomeBanner from "src/components/WelcomeBanner/WelcomeBanner";
import ReviewWall from "src/components/ReviewWall/ReviewWall";

const DashboardPage = () => {

  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page"/>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}

        <div className="relative flex flex-col flex-1 bg-neutral-100 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner/>
              {/* Cards */}
              <div className="grid grid-cols-12 gap-6">
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
