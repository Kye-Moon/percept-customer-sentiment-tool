import Sidebar from "src/components/Sidebar/Sidebar";
import {useState} from "react";
import WelcomeBanner from "src/components/WelcomeBanner/WelcomeBanner";

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <>
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className="relative flex flex-col flex-1 bg-base-100 overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    </div>
  </>
}

export default AppLayout
