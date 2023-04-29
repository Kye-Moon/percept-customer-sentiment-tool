import PerceptLogo from '../../images/PerceptLogo.png'
import {CreateCampaignLandingPageFormSectionProps} from "src/interfaces";
import {useFormContext} from "react-hook-form";

export const MockLandingPageComponent = ({imagePreview}: CreateCampaignLandingPageFormSectionProps) => {
  const { watch, formState: {errors}} = useFormContext();
  let pageTitle = watch('pageTitle') || 'Page Title'
  let pageMessage = watch('pageMessage') || <progress className="progress w-56" value={0}></progress>
  let logo = watch('logo') || PerceptLogo
  return (
    <div className="card w-full  shadow-xl">
      <div className={'grid grid-rows-6 grid-cols-4  '}>
        <div className={'row-span-6 col-span-2  rounded-lb-3xl bg-neutral-50 '}>
          <div className="h-full ">
            <div className={`h-4/5 text-base-500  flex flex-col place-content-center`}>
              <div className={'flex flex-col space-y-4   place-items-center'}>
                <div className={'w-1/3 flex justify-center'}>
                  <img src={imagePreview || logo} alt={'LOGO'} className=" rounded-3xl h-24 w-24 "/>
                </div>
                <div className="max-w-xl flex flex-col  ">
                  <h1 className="text-2xl font-bold flex justify-center">{pageTitle}</h1>
                  <p className=" flex text-md text-center justify-center py-2">
                    {pageMessage}
                  </p>
                </div>
                <div className="w-8/12 flex flex-col space-y-2 ">
                  <h1 className={`text-sm  font-bold flex`}>Questions</h1>
                  <progress className="progress w-56" value="0" max="100"></progress>
                  <progress className="progress w-56" value="0" max="100"></progress>
                </div>
              </div>
            </div>
            <div className={'text-base-100 flex flex-col place-items-center'}>
              <div className={'flex  text-sm w-8/12  space-x-4'}>
                <div className={`btn btn-xs w-1/2  `}>
                  Text review
                </div>
                <div className={`btn btn-xs w-1/2 btn-outline text-black  `}>
                  Video review
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'row-span-6 col-span-2 space-y-20   flex flex-col   place-content-center '}>
          <div className="h-96 p-12">
            <div className={'space-y-4'}>
              <div className={'flex'}>
                <div className="w-full flex flex-col space-y-2 ">
                  <h1 className={`text-xs  font-bold flex`}>Testimonaial</h1>
                  <progress className="progress pr  h-16" value="100" max="100"></progress>
                </div>
              </div>
              <div className={'flex space-x-4 '}>
                <div className=" flex flex-col space-y-2 w-8/12 ">
                  <h1 className={`text-xs  font-bold flex`}>Name</h1>
                  <progress className="progress  h-6 " value="100" max="100"></progress>
                </div>
                <div className=" flex flex-col space-y-2 w-8/12 ">
                  <h1 className={`text-xs  font-bold flex`}>Email</h1>
                  <progress className="progress  h-6 " value="100" max="100"></progress>
                </div>
              </div>
              <div className=" flex flex-col space-y-2 w-8/12 ">
                <progress className="progress  h-6 rounded-full h-8 w-8 " value="100" max="100"></progress>
                <h1 className={`text-xs  font-bold flex`}>Upload image</h1>
              </div>
              <div className=" flex  justify-end space-y-2 w-full ">
                <div className={' px-2 btn btn-outline btn-xs text-xs rounded-md '}> Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
