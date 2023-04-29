import {FormProvider, SubmitHandler, UseFormReturn} from "react-hook-form";
import {CreateCampaignDetailsForm} from "src/components/Forms/CreateCampaignDetailsForm";
import CreateCampaignLandingPageFormSection
  from "src/components/CreateCampaignLandingPageFormSection/CreateCampaignLandingPageFormSection";
import {CreateCampaignIntegrationsForm} from "src/components/Forms/CreateCampaignIntergrationsForm";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import React from "react";
import {FormData} from "src/components/Forms/schemas";

export interface CampaignFormProps {
  methods:  UseFormReturn<FormData>
  submitting: boolean
  setLogoChanged: (value: boolean) => void
  onSubmit: SubmitHandler<FormData>
}

export const CampaignForm = ({methods,submitting,setLogoChanged, onSubmit}:CampaignFormProps) => {
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={'mb-40'}>
          <CreateCampaignDetailsForm/>
          <CreateCampaignLandingPageFormSection setLogoChanged={setLogoChanged}/>
          <CreateCampaignIntegrationsForm/>
          <div className={'divider'}></div>
          <div className={"mt-16 flex justify-end py-12"}>
            <button className={"btn btn-primary btn-wide  ml-12 space-x-2"}>
              {submitting ? (
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...
                      </span>
                </div>
              ) : (
                <>
                  <input type="submit"/>
                  <ArrowRightIcon className={"w-6 h-6"}/>
                </>
              )}
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  )
}
