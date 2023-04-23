// @ts-ignore
import UploadAvatarImage from '../../images/UploadAvatar.jpeg'


export const TextReviewForm = () => {
  return (
    <>
      <div className={'px-40 space-y-12 '}>
        <div>
          <label className="label">
            <span className="label-text">Your Testimonial or Review</span>
          </label>
          <textarea className="textarea textarea-bordered w-full"
                    placeholder="Let us know what you think"></textarea>
        </div>
        <div className={'flex space-x-12 '}>
          <div className={'w-1/2'}>
            <label className="label">
              <span className="label-text">Your name</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
          </div>
          <div className={'w-1/2'}>
            <label className="label">
              <span className="label-text">Your email</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
          </div>
        </div>
        <div className={'flex space-x-12 '}>
          <div className={''}>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={UploadAvatarImage}  alt={""}/>
              </div>
            </div>
          </div>
          <div className={'w-full'}>
            <input
              className="block text-sm text-gray-400 cursor-pointer bg-base-100 focus:outline-none "
              aria-describedby="file_input_help" id="file_input" type="file"/>
            <label className="label">
              <span className="label-text">Upload your photo </span>
            </label>
          </div>
        </div>
      </div>
      <div className={'px-40 flex justify-end'}>
        <button className="btn btn-primary btn-wide">Submit</button>
      </div>
    </>
  )
}
