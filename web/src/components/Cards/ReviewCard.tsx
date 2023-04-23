import React from 'react';
import {Link} from "@redwoodjs/router";
import HeartIcon from "../../images/svgs/HeartIcon.svg"
import TrashIcon from "../../images/svgs/TrashIcon.svg"
import StarIcon from "../../images/svgs/StarIcon.svg"
import PhLogo from "src/images/product-hunt-logo.png";
import TwitterLogo from "src/images/twitter_logo.png";
import {CampaignReview, ReviewStatus} from "types/graphql";

interface MenitonCardProps {
  tab: string
  campaignReview: CampaignReview
  reviewUpdateHandler: Function
}

function ReviewCard({ tab,
                      campaignReview,
                      reviewUpdateHandler
                    }: MenitonCardProps) {
  const review = campaignReview.review
  const logo = (review.mentionSource === "producthunt") ? PhLogo : TwitterLogo

  return (
    <div className="col-span-full text-white px-12 sm:col-span-6 xl:col-span-4 bg-white/5  shadow-lg rounded-xl ">
      <div className="flex flex-col h-full">
        {/* Image + name */}
        <div className="grow p-5">
          <div className="flex justify-between items-start">
            <div className="flex mb-2 overflow-hidden">
              <Link className="absolute inline-flex items-start mr-5" to={review.username}> {/*goes nowhere atm*/}
                <img className="rounded-full h-14  w-14" src={review.profileImageUrl} alt={""}/>
              </Link>
              <div className="mt-1 ml-16">
                <Link className="inline-flex  hover:text-slate-300" to={review.profileImageUrl}> {/*goes nowhere atm*/}
                  <h2 className="text-xl px-4 leading-snug justify-center font-semibold">{review.username}</h2>
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
            <h1 className="text-lg text-white">{review.body}</h1>
          </div>
        </div>

        {/* Card footer */} {/*TODO - refactor*/}
        <div className="flex ">
          <div className="block flex-1 text-center text-sm text-slate-400 hover:text-primary font-medium px-3 py-4">
            <div className="flex items-center justify-center tooltip  " data-tip={"Add to your wall"}>
              <button onClick={() =>  reviewUpdateHandler(campaignReview,"ACTIVE" as ReviewStatus)}>
                <HeartIcon className={"w-6 h-6"}/>
              </button>
            </div>
          </div>
          {tab !== "favourites" &&
            <div
              className="block flex-1 text-center text-sm text-slate-400 hover:text-secondary font-medium px-3 py-4 group">
              <div className="flex items-center justify-center tooltip " data-tip={"Add to favourites"}>
                <button onClick={() => reviewUpdateHandler(campaignReview,"FAVORITE" as ReviewStatus)}>
                  <StarIcon className={"w-6 h-6"}/>
                </button>
              </div>
            </div>
          }
          {tab !== "archived" &&
          <div className="block flex-1 text-center text-sm text-slate-400 hover:text-red-500 font-medium px-3 py-4 group">
            <div className="flex items-center justify-center tooltip  " data-tip={"Delete"}>
                <button onClick={() => reviewUpdateHandler(campaignReview,"ARCHIVED" as ReviewStatus)}>
                  <TrashIcon className={"w-6 h-6"}/>
                </button>
            </div>
          </div>
          }
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
