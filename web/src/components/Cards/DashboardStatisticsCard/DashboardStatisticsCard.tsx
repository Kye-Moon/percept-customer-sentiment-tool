import React from 'react';
import {Link} from "@redwoodjs/router";
import LineChart from '../../charts/LineChart01';
import Icon from '../../../images/svgs/icon-02.svg'
import DropdownEditMenu from "src/components/DropdownEditMenu";

interface StatisticCardProps {
  data: Object
  title:string
}


function DashboardCard02({data,title}:StatisticCardProps) {

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <div>
            <Icon/>
          </div>
          {/* Menu button */}
          <DropdownEditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 1</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-slate-600 hover:text-slate-800 flex py-1 px-3" to="#0">Option 2</Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</Link>
            </li>
          </DropdownEditMenu>
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">{title}</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">17,489</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-gray-400 rounded-full">-14%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={data} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard02;
