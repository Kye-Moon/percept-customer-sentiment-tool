import {TwitterIntegrationsForm} from "src/components/Forms/TwitterIntegrationsForm";
import ProductHuntIntegrationsForm from "src/components/Forms/ProductHuntIntegrationsForm";
import {CreateCampaignLandingPageFormSectionProps} from "src/pages/CreateCampaignPage/CreateCampaignPage";


export const CreateCampaignIntegrationsForm = ({register,errors}:CreateCampaignLandingPageFormSectionProps) => {
  return (
    <div>
      <h1 className={"text-2xl py-4 mt-6 font-semibold"}>Integrations</h1>
      <div className={"grid grid-cols-6  space-x-4"}>
        {/*Twitter*/}
        <TwitterIntegrationsForm register={register}/>
        <ProductHuntIntegrationsForm register={register}/>
      </div>
    </div>
  )
}
