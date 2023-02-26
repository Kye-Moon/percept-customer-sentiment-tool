import React, {useState} from 'react';
import {Link} from "@redwoodjs/router";
import HeartIcon from "../../images/svgs/HeartIcon.svg"
import TrashIcon from "../../images/svgs/TrashIcon.svg"
import StarIcon from "../../images/svgs/StarIcon.svg"

interface MenitonCardProps {
  id: number
  date: string
  body: string
  source: string
  username: string
  profileUrl: string
  saveReviewToWall: Function
  favouriteReview: Function
  deleteReview: Function
}

function UsersTilesCard({id,body, date, profileUrl, source, username,deleteReview,saveReviewToWall,favouriteReview}: MenitonCardProps) {

  return (
    <div className="col-span-full text-neutral sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-xl border border-slate-200">
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
                  <span>{source}</span>
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
            <h1 className="text-md text-black">{body}</h1>
          </div>
        </div>

        {/* Card footer */} {/*TODO - refactor*/}
          <div className="flex">
              <div className="block flex-1 text-center text-sm text-slate-600 hover:text-primary font-medium px-3 py-4">
              <div className="flex items-center justify-center tooltip  " data-tip={"Add to your wall"}>
                <button  onClick={()=>saveReviewToWall(id)}>
                  <HeartIcon className={"w-6 h-6"}/>
                </button>
              </div>
            </div>
            <div
              className="block flex-1 text-center text-sm text-slate-600 hover:text-secondary font-medium px-3 py-4 group">
              <div className="flex items-center justify-center tooltip " data-tip={"Add to favourites"}>
                <button  onClick={()=>favouriteReview(id)}>
                  <StarIcon className={"w-6 h-6"}/>
                </button>
              </div>
            </div>
            <div
              className="block flex-1 text-center text-sm text-slate-600 hover:text-red-500 font-medium px-3 py-4 group">
              <div className="flex items-center justify-center tooltip  " data-tip={"Delete"}>
                <button onClick={()=>deleteReview(id)}>
                  <TrashIcon className={"w-6 h-6"}/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default UsersTilesCard;
