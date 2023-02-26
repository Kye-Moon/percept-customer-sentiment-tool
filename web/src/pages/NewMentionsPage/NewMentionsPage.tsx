import {Link} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import {PlusIcon} from "@heroicons/react/24/solid";
//@ts-ignore    Dunno here just a redwood thing with cells.
import ReviewsGridCell from "src/components/ReviewsGridCell/ReviewsGridCell";

const NewMentionsPage = () => {
  return (
    <div>
      <MetaTags title="NewMentions" description="NewMentions page"/>

      <div className="px-2 sm:px-6 py-8 w-full max-w-9xl mx-auto">
        <div className="sm:flex sm:justify-between sm:items-center mb-8">

          {/* Left: Title */}
          <div className="mb-4 sm:mb-0 py-8">
            <h1 className="text-2xl md:text-3xl text-slate-800 font-bold">Acme Inc. Kanban ✨</h1>
          </div>

          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Add board button */}
            <button className="btn btn-secondary text-white">
              <PlusIcon className={'w-6 h-6'}/>
              <span className="ml-2">Add Board</span>
            </button>
          </div>
        </div>
        {/* Filters */}
        <div className="mb-4 border-b border-slate-200">
          <ul className="text-sm font-medium flex flex-nowrap -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-scroll no-scrollbar">
            <li
              className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <Link className="text-indigo-500 whitespace-nowrap" to="#0">All</Link>
            </li>
            <li
              className="pb-3 mr-6 last:mr-0 first:pl-4 sm:first:pl-6 lg:first:pl-8 last:pr-4 sm:last:pr-6 lg:last:pr-8">
              <Link className="text-slate-500 hover:text-slate-600 whitespace-nowrap" to="#0">Suggested</Link>
            </li>
          </ul>
        </div>
        {/* Reviews */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto columns-2 md:columns-3 lg:columns-4">
          <ReviewsGridCell/>
        </div>
      </div>
    </div>
  )
}


export default NewMentionsPage
