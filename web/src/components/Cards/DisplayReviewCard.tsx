import React, {useState} from 'react';
import {Link} from "@redwoodjs/router";
import PhLogo from '../../images/product-hunt-logo.png'
import TwitterLogo from '../../images/twitter_logo.png'

interface MenitonCardProps {
  id: number
  date: string
  body: string
  source: string
  username: string
  profileUrl: string
}

function DisplayReviewCard({id, body, profileUrl, source, username}: MenitonCardProps) {
  const logo = (source === "product hunt") ? PhLogo : TwitterLogo

  return (
    <div
      className="col-span-full text-white  sm:col-span-6 xl:col-span-4 bg-neutral shadow-lg rounded-xl ">
      <div className="flex flex-col h-full">
        {/* Image + name */}
        <div className="grow p-5">
          <div className="flex justify-between items-start">
            <div className="flex mb-2 overflow-hidden">
              <Link className="absolute inline-flex items-start mr-5" to={username}> {/*goes nowhere atm*/}
                <img className="rounded-full h-14  w-14" src={profileUrl} alt={""}/>
              </Link>
              <div className="mt-1 ml-16">
                <Link className="inline-flex  hover:text-slate-900" to={profileUrl}> {/*goes nowhere atm*/}
                  <h2 className="text-xl leading-snug justify-center font-semibold">{username}</h2>
                </Link>
                <div className="flex items-center">
                  <span>
                    <div className="absolute inline-flex items-start -ml-4"> {/*goes nowhere atm*/}
                      <img className="rounded-full h-6  w-6" src={logo} alt={""}/>
                    </div >
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary!! */}
          <div className="mt-2 py-2">
            <h1 className="text-xl font-semibold">{"decription"}</h1>{/*TODO*/}
          </div>

          {/* Content */}
          <div className="mt-2 py-2">
            <h1 className="text-md ">{body}</h1>
          </div>
          {/* Card footer */} {/*TODO - refactor*/}
          <div className="flex py-2">
            <div className="rating rating-sm">
              <input className="mask mask-star-2 bg-orange-400"/>
              <input className="mask mask-star-2 bg-orange-400"/>
              <input className="mask mask-star-2 bg-orange-400"/>
              <input className="mask mask-star-2 bg-orange-400"/>
              <input className="mask mask-star-2 bg-orange-400"/>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default DisplayReviewCard;
