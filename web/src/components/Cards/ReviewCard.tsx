import React, {useState} from 'react';
import {Link} from "@redwoodjs/router";
import HeartIcon from "../../images/svgs/HeartIcon.svg"
import TrashIcon from "../../images/svgs/TrashIcon.svg"
import StarIcon from "../../images/svgs/StarIcon.svg"
import PhLogo from "src/images/product-hunt-logo.png";
import TwitterLogo from "src/images/twitter_logo.png";

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

function ReviewCard({
                      id,
                      body,
                      profileUrl,
                      source,
                      username,
                      deleteReview,
                      saveReviewToWall,
                      favouriteReview
                    }: MenitonCardProps) {
  const logo = (source === "product hunt") ? PhLogo : TwitterLogo

  return (
    <div
      className="col-span-full text-white px-12 sm:col-span-6 xl:col-span-4 bg-neutral shadow-lg rounded-xl ">
      <div className="flex flex-col h-full">
        {/* Image + name */}
        <div className="grow p-5">
          <div className="flex justify-between items-start">
            <div className="flex mb-2 overflow-hidden">
              <Link className="absolute inline-flex items-start mr-5" to={username}> {/*goes nowhere atm*/}
                <img className="rounded-full h-14  w-14" src={profileUrl} alt={""}/>
              </Link>
              <div className="mt-1 ml-16">
                <Link className="inline-flex  hover:text-slate-300" to={profileUrl}> {/*goes nowhere atm*/}
                  <h2 className="text-xl px-4 leading-snug justify-center font-semibold">{username}</h2>
                </Link>
                <div className="flex items-center py-2">
                  <span>
                    <div className="absolute inline-flex items-start ml-4 "> {/*goes nowhere atm*/}
                      <img className="rounded-full h-6  w-6" src={logo} alt={""}/>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary!! */}
          <div className="mt-4 py-4 px-12">
            <h1 className="text-xl font-semibold">{"decription"}</h1>{/*TODO*/}
          </div>

          {/* Content */}
          <div className="mt-2 px-12 pb-4 ">
            <h1 className="text-md text-white">{body}</h1>
          </div>
        </div>

        {/* Card footer */} {/*TODO - refactor*/}
        <div className="flex ">
          <div className="block flex-1 text-center text-sm text-slate-400 hover:text-primary font-medium px-3 py-4">
            <div className="flex items-center justify-center tooltip  " data-tip={"Add to your wall"}>
              <button onClick={() => saveReviewToWall(id)}>
                <HeartIcon className={"w-6 h-6"}/>
              </button>
            </div>
          </div>
          <div
            className="block flex-1 text-center text-sm text-slate-400 hover:text-secondary font-medium px-3 py-4 group">
            <div className="flex items-center justify-center tooltip " data-tip={"Add to favourites"}>
              <button onClick={() => favouriteReview(id)}>
                <StarIcon className={"w-6 h-6"}/>
              </button>
            </div>
          </div>
          <div
            className="block flex-1 text-center text-sm text-slate-400 hover:text-red-500 font-medium px-3 py-4 group">
            <div className="flex items-center justify-center tooltip  " data-tip={"Delete"}>
              <button onClick={() => deleteReview(id)}>
                <TrashIcon className={"w-6 h-6"}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
