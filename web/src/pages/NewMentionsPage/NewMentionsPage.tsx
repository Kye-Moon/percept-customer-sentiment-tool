import {Link} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import {PlusIcon} from "@heroicons/react/24/solid";
//@ts-ignore    Dunno here just a redwood thing with cells.
import ReviewsGridCell from "src/components/ReviewsGridCell/ReviewsGridCell";
import {useState} from "react";

enum FilterType {
  ALL = "ALL",
  ARCHIVED = "ARCHIVED",
  FAVOURITE = "FAVOURITE",
  ONWALL = "ONWALL"
}

const NewMentionsPage = () => {
  const [filter, setFilter] = useState(FilterType.ALL)

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
          <div className="tabs">
            <a className={`tab font-semibold text-white ${filter === FilterType.ALL ? 'tab-active text-secondary' : ''}`} onClick={() => setFilter(FilterType.ALL)}>All</a>
            <a className={`tab font-semibold text-white ${filter === FilterType.FAVOURITE ? 'tab-active text-secondary': ''}`} onClick={() => setFilter(FilterType.FAVOURITE)}>Favourites</a>
            <a className={`tab font-semibold text-white ${filter === FilterType.ARCHIVED ? 'tab-active text-secondary' : ''}`} onClick={() => setFilter(FilterType.ARCHIVED)}>Archived</a>
          </div>
        </div>
        {/* Reviews */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto columns-2 md:columns-3 lg:columns-1 ">
          <ReviewsGridCell
            filter={filter}
          />
        </div>
      </div>
    </div>
  )
}


export default NewMentionsPage
