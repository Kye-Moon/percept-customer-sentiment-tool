import React from 'react';
import {Link} from "@redwoodjs/router";
import HeartIcon from "../../images/svgs/HeartIcon.svg"
import TrashIcon from "../../images/svgs/TrashIcon.svg"
import StarIcon from "../../images/svgs/StarIcon.svg"
import {CampaignReview, ReviewStatus} from "types/graphql";
import {getReviewSourceImage, ReviewSource} from "src/services/ReviewsService";

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
  const reviewSourceLogo = getReviewSourceImage(campaignReview.review.mentionSource as ReviewSource)


  return (
    <div className="shadow-xl border bg-white/75 rounded-xl ">
      <div className="flex flex-col">
        {/* Image + name */}
        <div className="p-5">
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
                      <img className="rounded-full h-6  w-6" src={reviewSourceLogo} alt={""}/>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mt-2 px-6 pt-8">
            <h1 className="text-lg">{review.body}</h1>
          </div>
          <div className={'divider '}></div>
          <div className="flex ">
            <div className="block flex-1 text-center   hover:text-primary ">
              <div className="tooltip " data-tip={"Add to your wall"}>
                <button onClick={() =>  reviewUpdateHandler(campaignReview,"ACTIVE" as ReviewStatus)}>
                  <HeartIcon className={"w-6 h-6"}/>
                </button>
              </div>
            </div>
            {tab !== "favourites" &&
              <div
                className="block flex-1 text-center   hover:text-secondary ">
                <div className=" tooltip " data-tip={"Add to favourites"}>
                  <button onClick={() => reviewUpdateHandler(campaignReview,"FAVORITE" as ReviewStatus)}>
                    <StarIcon className={"w-6 h-6"}/>
                  </button>
                </div>
              </div>
            }
            {tab !== "archived" &&
              <div className="block flex-1 text-center   hover:text-red-500 group">
                <div className=" tooltip  " data-tip={"Delete"}>
                  <button onClick={() => reviewUpdateHandler(campaignReview,"ARCHIVED" as ReviewStatus)}>
                    <TrashIcon className={"w-6 h-6"}/>
                  </button>
                </div>
              </div>
            }
          </div>
        </div>

        {/* Card footer */} {/*TODO - refactor*/}


      </div>
    </div>
  );
}

export default ReviewCard;
