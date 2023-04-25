
import * as React from 'react';
import TwitterLogo from "src/images/twitter_logo.png";
import {CampaignIntergrationsFormProps} from "src/components/Forms/CreateCampaignIntergrationsForm";

export const TwitterIntegrationsForm = ({register}: CampaignIntergrationsFormProps) => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="twitter-modal" className="btn  space-x-4">
        <img alt={""} src={TwitterLogo} className={'w-6 h-6 rounded-full'}/>
        <h1>Twitter</h1>
      </label>

      {/*Modal Toggle*/}
      <input type="checkbox" id="twitter-modal" className="modal-toggle"/>

      {/*Modal*/}
      <div className="modal">
        <div className="modal-box relative bg-primary w-9/12 max-w-2xl">
          <label htmlFor="twitter-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Twitter </h3>
          <p className="py-4">Add you twitter information and we will keep an eye out for anytime you're mentioned.</p>
          <div className={'space-y-4'}>

            {/*Company Name*/}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Company name</span>
              </label>
              <input {...register("twitterCompanyName")} type="text" placeholder="" className="input input-bordered"/>
            </div>

            {/*Company Twitter Handle*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company twitter handle</span>
              </label>
              <input {...register("companyTwitterHandle")} type="text" placeholder="@example"
                     className="input input-bordered"/>
            </div>

            {/*List of users to exclude from twitter search*/}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Excluded mentions</span>
              </label>
              <input type="text" placeholder="@example"
                     className="input input-bordered"/>
              <label className="label">
                <span className="label-text-alt">Comma seperated list of other twitter handles you would like us to exclude </span>
              </label>
            </div>

            {/*Actions*/}
            <div className={" py-2 flex justify-end"}>
              <label htmlFor="twitter-modal" className="btn btn-md btn-outline  bottom-2">Save</label>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
