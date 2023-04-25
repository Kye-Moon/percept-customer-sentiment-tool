import {MockLandingPageComponent} from "src/components/CreateCampaignLandingPageFormSection/MockLandingPageComponent";
import CreateCampaignLandingPageForm
  from "src/components/CreateCampaignLandingPageFormSection/CreateCampaignLandingPageForm/CreateCampaignLandingPageForm";
import PerceptLogo from '../../images/PerceptLogo.png'
import {CreateCampaignLandingPageFormSectionProps} from "src/pages/CreateCampaignPage/CreateCampaignPage";
import {useState} from "react";


const CreateCampaignLandingPageFormSection = ({register, watch, errors}:CreateCampaignLandingPageFormSectionProps ) => {
  const [preview, setPreview] = useState<string | undefined>(PerceptLogo)
  return (
    <div>
      <h1 className={"text-2xl py-4 mt-12 font-semibold"}>Your Review Capture Page</h1>
      <div className={'divider'}></div>
      <div className={"grid grid-cols-6 gap-4   align-middle py-12 "}>
        <div className={'col-span-3 '}>
          <CreateCampaignLandingPageForm register={register} errors={errors} setImagePreview={setPreview}/>
        </div>
        <div className={'col-span-3 w-full rounded-3xl '}>
          <div className="mockup-window border border-3">
            <div className="flex justify-center ">
              <MockLandingPageComponent watch={watch} imagePreview={preview} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCampaignLandingPageFormSection
