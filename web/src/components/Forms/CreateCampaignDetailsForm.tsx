export const CreateCampaignDetailsForm = ({register}) => {
  return (
    <>
      <div className={"grid grid-cols-1 space-y-8  align-middle"}>
        {/*Name*/}
        <div className="form-control w-8/12 ">
          <label className="label">
            <span className="label-text">Campaign Name</span>
          </label>
          <input {...register("title")} type="text" placeholder="eg. Reviews for website" className="input input-bordered w-full "/>
        </div>
        {/*Description*/}
        <div className="form-control w-8/12 ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input {...register("description")} type="text" placeholder="Type here" className="input input-bordered w-full "/>
        </div>
      </div>
      <h1 className={"text-lg py-4 mt-6 font-semibold"}>Your Review Capture Page</h1>
      <div className={"grid grid-cols-2 justify-items-center  align-middle"}>
        IGNORE FOR NOW
      </div>
    </>
  )
}
