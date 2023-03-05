import TwitterLogo from "src/images/twitter_logo.png";
import ProductHuntLogo from "src/images/product-hunt-logo.png";
import {TwitterIntegrationsForm} from "src/components/Forms/TwitterIntegrationsForm";
import ProductHuntIntegrationsForm from "src/components/Forms/ProductHuntIntegrationsForm";

export interface CampaignIntergrationsFormProps {
  register: Function
}

export const CreateCampaignIntegrationsForm = ({register}:CampaignIntergrationsFormProps) => {
  return (
    <>
      <h1 className={"text-lg py-4 mt-6 font-semibold"}>Integrations</h1>
      <div className={"grid grid-cols-6 justify-items-center  align-middle"}>
        {/*Twitter*/}
        <TwitterIntegrationsForm register={register}/>
        <ProductHuntIntegrationsForm register={register}/>
      </div>
    </>
  )
}
