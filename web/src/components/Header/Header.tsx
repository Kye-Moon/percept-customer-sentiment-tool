import React from 'react';

const Header = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <div className="flex  ">
      <div className="relative flex flex-col flex-1  ">
        <header className="bg-base-100  z-30 flex justify-end ">
          <div className="p-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 -mb-px">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="btn btn-outline btn-circle m-1">MS</label>
                  <ul tabIndex={0} className="dropdown-content text-base-100 menu p-2 shadow bg-white rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header
