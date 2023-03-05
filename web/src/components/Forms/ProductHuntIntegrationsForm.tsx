import React from 'react';
import ProductHuntLogo from "src/images/product-hunt-logo.png";
import {CampaignIntergrationsFormProps} from "src/components/Forms/CreateCampaignIntergrationsForm";
import TwitterLogo from "src/images/twitter_logo.png";

const ProductHuntIntegrationsForm = ({register}: CampaignIntergrationsFormProps) => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="product-hunt-modal" className="btn px-6 space-x-4">
        <img alt={""} src={ProductHuntLogo} className={'w-6 h-6 rounded-full'}/>
        <h1>Product Hunt</h1>
      </label>

      {/*Modal Toggle*/}
      <input type="checkbox" id="product-hunt-modal" className="modal-toggle"/>

      {/*Modal*/}
      <div className="modal ">
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
              <input {...register("productHuntPostUrl")} type="text" placeholder="https://www.producthunt.com/posts/your-product" className="input input-bordered"/>
            </div>

            {/*Company Twitter Handle*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Reviews Url</span>
              </label>
              <input {...register("productHuntReviewsUrl")} type="text" placeholder="https://www.producthunt.com/products/your-product/reviews"
                     className="input input-bordered"/>
              <label className="label">
                <span className="label-text"></span>
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
