import React from 'react';
import PerceptLogo from '../../images/PerceptLogo.png'

const Header = ({sidebarOpen, setSidebarOpen}) => {
  return (
    <div className={'w-full'}>
        <header className="bg-base-100 ">
            <div className="flex items-center justify-between h-16 p-12 ">
              <div className="flex w-12 h-12 ">
                <img src={PerceptLogo}/>
                <div className={'flex place-items-center px-2'}>
                  <h1 className={'font-semibold text-2xl '}>Percept</h1>
                </div>
              </div>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex={0} className="btn btn-outline btn-circle m-1">MS</label>
                  <ul tabIndex={0} className="dropdown-content text-base-100 menu p-2 shadow bg-white rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header
