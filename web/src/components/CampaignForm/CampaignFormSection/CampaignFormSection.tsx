import {Link, navigate, routes, useParams} from '@redwoodjs/router'
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import {CreateCampaignDetailsForm} from "src/components/Forms/CreateCampaignDetailsForm";
import {CreateCampaignIntegrationsForm} from "src/components/Forms/CreateCampaignIntergrationsForm";
import {useAuth} from "src/auth";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import CreateCampaignLandingPageFormSection
  from "src/components/CreateCampaignLandingPageFormSection/CreateCampaignLandingPageFormSection";
import {yupResolver} from '@hookform/resolvers/yup';
import React, {useState} from "react";
import {createEditCampaignSchema, FormData} from "src/components/Forms/schemas";
import {campaignService} from "src/services/campaignService";
import {useMutation} from "@redwoodjs/web";
import {CREATE_CAMPAIGN, UPDATE_CAMPAIGN} from "src/graphql/mutations";
import {CampaignFormHeader} from "src/components/CampaignForm/CampaignFormHeader/CampaignFormHeader";
import {CampaignForm} from "src/components/CampaignForm/Form/CampaignForm";

interface CampaignFormSectionProps {
  initialValues?: FormData
}

export const CampaignFormSection = ({initialValues}: CampaignFormSectionProps) => {

  const [submitting, setSubmitting] = useState<boolean>(false)
  const [logoChanged, setLogoChanged] = useState<boolean>(false)
  const [updateCampaign] = useMutation(UPDATE_CAMPAIGN)
  const [createCampaign] = useMutation(CREATE_CAMPAIGN)


  const auth = useAuth()
  const {id} = useParams()


  const methods = useForm<FormData>({
    resolver: yupResolver(createEditCampaignSchema),
    defaultValues: initialValues || undefined,
  });

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setSubmitting(true)
    const token = await auth.getToken()

    const input = await campaignService.getCreateOrUpdateCampaignInputsFromFormData({
      data: data,
      updateLogo: logoChanged,
      authToken: token
    })
    if (id === undefined) {
      await createCampaign({variables: {input: input}})
    } else {
      await updateCampaign({variables: {input: input, id: id}})
    }
    navigate(routes.dashboard())
    methods.reset()
    setSubmitting(false)
  }

  return (
    <>
      <div className={"flex flex-col"}>
        <div className="px-8 sm:px-6 lg:px-20 py-8 w-full max-w-9xl mx-auto">
          <CampaignFormHeader
            actionType={(id===undefined) ? "create" :"edit"}
          />
          <CampaignForm
            methods={methods}
            submitting={submitting}
            setLogoChanged={setLogoChanged}
            onSubmit={onSubmit}/>
        </div>
      </div>
    </>
  )
}

