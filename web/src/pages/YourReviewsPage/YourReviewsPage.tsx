
import { MetaTags } from '@redwoodjs/web'
import {PlusIcon} from "@heroicons/react/24/solid";
//@ts-ignore    Dunno here just a redwood thing with cells.
import ReviewsWallCell from "src/components/ReviewsWallCell/ReviewsWallCell";


const YourReviewsPage = () => {
  return (
    <>
      <MetaTags title="YourReviews" description="YourReviews page" />
      <div className="px-2 sm:px-6 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0 py-8">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Acme Inc. Kanban ✨</h1>
          </div>


        </div>
        {/* Filters */}
        <div className="mb-4 ">
          <div className="tabs">
            <a className={`tab `} >Masonry Fixed</a>
            <a className={`tab `} >Masonry Scrolling</a>
            <a className={`tab `} >Carousel</a>
          </div>
        </div>
        {/* Reviews */}
        <div className="px-12  rounded-2xl sm:px-6 lg:px-12 py-12 w-full border border-1 max-w-9xl mx-auto columns-2 md:columns-3 lg:columns-4">
          <ReviewsWallCell/>
        </div>
      </div>
    </>
  )
}

export default YourReviewsPage
