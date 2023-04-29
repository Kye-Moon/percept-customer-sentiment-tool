import {FormProvider, useForm} from "react-hook-form";
import {CreateCampaignDetailsForm} from "src/components/Forms/CreateCampaignDetailsForm";
import CreateCampaignLandingPageFormSection
  from "src/components/CreateCampaignLandingPageFormSection/CreateCampaignLandingPageFormSection";
import {CreateCampaignIntegrationsForm} from "src/components/Forms/CreateCampaignIntergrationsForm";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import React, {useState} from "react";
import {createEditCampaignSchema, FormData} from "src/components/Forms/schemas";
import {yupResolver} from "@hookform/resolvers/yup";
import {getCampaignFormInitialValues} from "src/services/campaignService";
import {CreateEditAction} from "src/components/CampaignForm/CampaignFormSection/CreateCampaignSection";
import {useLazyQuery} from "@apollo/client";
import {CAMPAIGN_INITIAL_VALUES} from "src/graphql/query";
import {ImageUploadType, uploadImageToS3} from "src/utils/imageUtils";
export const CreateEditCampaignForm = ({campaignId,action, onSubmit }) => {

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [logoChanged, setLogoChanged] = useState<boolean>(false)

  const methods = useForm<FormData>({
    resolver: yupResolver(createEditCampaignSchema),
    defaultValues: async () => getInitialValues(),
  });



  const getInitialValues = async () => {
    if (action === CreateEditAction.EDIT) {
      const initialValuesData = await getInitialValuesQuery()
      console.log(getCampaignFormInitialValues({data: initialValuesData.data}))
      return getCampaignFormInitialValues({data: initialValuesData.data})
    }
  }
  const [getInitialValuesQuery, {data, loading}] = useLazyQuery(
    CAMPAIGN_INITIAL_VALUES, {
      variables: {id: campaignId},
      onError: (error) => {
        console.log("Something Went Wrong: " + error)
      }
    })

  return (
  <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)} className={'mb-40'}>
      <CreateCampaignDetailsForm/>
      <CreateCampaignLandingPageFormSection setLogoChanged={setLogoChanged}/>
      <CreateCampaignIntegrationsForm/>
      {/*Create Campaign Button*/}
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
)
}
