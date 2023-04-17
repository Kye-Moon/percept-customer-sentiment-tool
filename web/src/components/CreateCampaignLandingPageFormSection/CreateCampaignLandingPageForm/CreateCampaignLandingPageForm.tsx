import {LandingPageQuestionsForm} from "./LandingPageQuestionsForm";
import {
  CreateCampaignLandingPageFormSectionProps,
  FormData,
} from "src/pages/CreateCampaignPage/CreateCampaignPage";
import {useState} from "react";
import {UseFormRegister, UseFormWatch} from "react-hook-form";
import { client } from 'filestack-react'
export interface FormSectionProps {
  register: UseFormRegister<FormData>;
  watch?: UseFormWatch<FormData>;
  setImagePreview: (imagePreview: string | undefined) => void;
  errors: CreateCampaignLandingPageFormSectionProps["errors"];
}

const CreateCampaignLandingPageForm = ({register, setImagePreview, errors}:FormSectionProps) => {

  function showPreview(event){
    if(event.target.files.length > 0){
      setImagePreview(URL.createObjectURL(event.target.files[0]))
    }
  }

  return (
    <div className={'space-y-8'}>
      <div className="form-control w-5/6 ">
        <label className="label">
          <span className="label-text">Page Title</span>
        </label>
        <input {...register("pageTitle",{ required: true})}  type="text" placeholder="eg. Reviews for website" className="input input-bordered w-full "/>
        {errors.pageTitle && <span className={'text-error'}>This field is required</span>}
      </div>
      <div className="form-control w-5/6 ">
        <label className="label">
          <span className="label-text">Page Message</span>
        </label>
        <input {...register("pageMessage")} type="text" placeholder="Type here" className="input input-bordered w-full "/>
        {errors.pageMessage && <span className={'text-error'}>This field is required</span>}
      </div>
      <div className="form-control w-3/6 ">
        <label className="label">
          <span className="label-text">Page Url Slug</span>
        </label>
        <input {...register("landingPageSlug",{ required: true})} type="text" placeholder="Type here" className="input input-bordered w-full "/>
        {errors.landingPageSlug && <span className={'text-error'}>This field is required</span>}
      </div>
      <div className={'w-full'}>
        <input
          {...register("logo")}
          className="block text-sm text-gray-400 cursor-pointer bg-base-100 focus:outline-none "
          accept={"image/*"}
          onChange={(e) => {showPreview(e)}}
          aria-describedby="file_input_help" id="file-ip-1" type="file"/>
        {errors.logo && <span className={'text-error'}>This field is required</span>}
        <label className="label">
          <span className="label-text">Upload your photo </span>
        </label>
      </div>
      <LandingPageQuestionsForm register={register}/>
    </div>
  )
}

export default CreateCampaignLandingPageForm
