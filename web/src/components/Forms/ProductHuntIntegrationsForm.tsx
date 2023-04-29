import React from 'react';
import ProductHuntLogo from "src/images/product-hunt-logo.png";
import {CreateCampaignLandingPageFormSectionProps} from "src/components/CampaignForm/CampaignFormSection/CreateCampaignSection";
import {useFormContext} from "react-hook-form";

const ProductHuntIntegrationsForm = () => {
  const { control, register, formState: { errors } } = useFormContext();
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="product-hunt-modal" className="btn px-6 space-x-4">
        <img alt={""} src={ProductHuntLogo} className={'w-6 h-6 rounded-full'}/>
        <h1>Product Hunt</h1>
      </label>

      {/*Modal Toggle*/}
      <input role={"phModalToggle"} type="checkbox" id="product-hunt-modal" className="modal-toggle"/>


      {/*Modal*/}
      <div role={"productHuntIntegrationsModal"} className="modal ">
        <div className="modal-box bg-primary w-9/12 max-w-2xl ">
          <label htmlFor="product-hunt-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Product Hunt </h3>
          <p className="py-4">Add you Product Hunt information and we will fetch and analyse all your reviews.</p>
          <div className={'space-y-4'}>

            {/*Company Name*/}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Post Url</span>
              </label>
              <input {...register("productHuntPostUrl")} type="text"
                     placeholder="https://www.producthunt.com/posts/your-product" className="input input-bordered"/>
            </div>

            {/*Company Twitter Handle*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviews Url</span>
              </label>
              <input {...register("productHuntReviewsUrl")} type="text"
                     placeholder="https://www.producthunt.com/products/your-product/reviews"
                     className="input input-bordered"/>
              <label className="label">
                <span className="label-text"></span>
              </label>
            </div>

            {/*Company Twitter Handle*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your producthunt username </span>
              </label>
              <input {...register("productOwnerPhUsername")} type="text" placeholder="Stephen_Abrams123"
                     className="input input-bordered"/>
              <label className="label">
                <span className="label-text">To filter out comments or replies left by yourself.</span>
              </label>
            </div>

            {/*Actions*/}
            <div className={" py-2 flex justify-end"}>
              <label htmlFor="product-hunt-modal" className="btn btn-md btn-outline  bottom-2">Save</label>
            </div>
          </div>

        </div>
      </div>
    </>

  );
};

export default ProductHuntIntegrationsForm;
