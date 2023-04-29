import {MockLandingPageComponent} from "src/components/CreateCampaignLandingPageFormSection/MockLandingPageComponent";
import CreateCampaignLandingPageForm
  from "src/components/CreateCampaignLandingPageFormSection/CreateCampaignLandingPageForm/CreateCampaignLandingPageForm";

import {useState} from "react";
import {CreateCampaignLandingPageFormSectionProps} from "src/interfaces";
import {useFormContext} from "react-hook-form";


const CreateCampaignLandingPageFormSection = ({setLogoChanged}: CreateCampaignLandingPageFormSectionProps) => {
  const [preview, setPreview] = useState<string | undefined>(undefined)
  const {control, register, watch, formState: {errors}} = useFormContext();
  const updateLogo = (image) => {
    setPreview(image)
    setLogoChanged(true)
  }
  return (
    <div>
      <h1 className={"text-2xl py-4 mt-12 font-semibold"}>Your Review Capture Page</h1>
      <div className={'divider'}></div>
      <div className={"grid grid-cols-6 gap-4   align-middle py-12 "}>
        <div className={'col-span-3 '}>
          <CreateCampaignLandingPageForm setImagePreview={updateLogo}/>
        </div>
        <div className={'col-span-3 w-full rounded-3xl '}>
          <div className="mockup-window border border-3">
            <div className="flex justify-center ">
              <MockLandingPageComponent imagePreview={preview}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCampaignLandingPageFormSection
