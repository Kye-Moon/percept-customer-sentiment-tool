export const CreateCampaignDetailsForm = ({register, errors}) => {
  return (
    <>
      <div className={"grid grid-cols-1 space-y-8  align-middle"}>
        {/*Name*/}
        <h1 className={"text-2xl py-4 mt-6  font-semibold"}>Campaign Details</h1>
        <div className={'divider'}></div>
        <div className="form-control w-8/12 ">
          <label className="label">
            <span className="label-text">Campaign Name</span>
          </label>
          <input {...register("title",{ required: true})} type="text" placeholder="eg. Reviews for website" className="input input-bordered w-full "/>
          {errors.title && <span className={'text-error'}>This field is required</span>}
        </div>
        {/*Description*/}
        <div className="form-control w-8/12 ">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input {...register("description")} type="text" placeholder="Type here" className="input input-bordered w-full "/>
          {errors.description && <span className={'text-error'}>This field is required</span>}
        </div>
      </div>
    </>
  )
}
