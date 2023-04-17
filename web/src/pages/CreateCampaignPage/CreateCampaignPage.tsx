import {Link, navigate, routes} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import Header from "src/components/Header/Header";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import {CreateCampaignDetailsForm} from "src/components/Forms/CreateCampaignDetailsForm";
import {CreateCampaignIntegrationsForm} from "src/components/Forms/CreateCampaignIntergrationsForm";
import {useAuth} from "src/auth";
import {useMutation} from "@redwoodjs/web";
import {FieldErrors, SubmitHandler, useForm, UseFormRegister, UseFormWatch} from "react-hook-form";
import {CREATE_CAMPAIGN} from "src/graphql/mutations";
import CreateCampaignLandingPageFormSection
  from "src/components/CreateCampaignLandingPageFormSection/CreateCampaignLandingPageFormSection";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useState} from "react";
import {uploadCampaignLandingPageImage} from "src/services/campaignService";

export interface CreateCampaignLandingPageFormSectionProps {
  register: UseFormRegister<FormData>;
  watch?: UseFormWatch<FormData>;
  errors: FieldErrors<FormData>;
}

interface UploadResponse {
  data: {
    Bucket: string,
    ETag: string,
    Key: string,
    Location: string,
    ServerSideEncryption: string,
    key: string,
  }
  message: string
}

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  pageTitle: yup.string().required(),
  pageMessage: yup.string().required(),
  landingPageSlug: yup.string().required(),
  question1: yup.string().notRequired(),
  question2: yup.string().notRequired(),
  question3: yup.string().notRequired(),
  question4: yup.string().notRequired(),
  logo: yup.mixed().notRequired(),
  productHuntPostUrl: yup.string().notRequired()
    .url("Must be a valid url"),
  productHuntReviewsUrl: yup.string().notRequired()
    .url("Must be a valid url"),
  twitterCompanyName: yup.string().notRequired(),
  companyTwitterHandle: yup.string().notRequired(),
  productOwnerPhUsername: yup.string().notRequired()
}).required();

export type FormData = yup.InferType<typeof schema>;

function removeEmptyFields(data) {
  Object.keys(data).forEach(key => {
    if (data[key] === '' || data[key] == null) {
      delete data[key];
    }
  });
}


const CreateCampaignPage = () => {
  const {userMetadata} = useAuth()
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const [createCampaign] = useMutation(CREATE_CAMPAIGN)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const auth = useAuth()


  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setSubmitting(true)
    removeEmptyFields(data)
    const token = await auth.getToken()

    const uploadResponse: UploadResponse = await uploadCampaignLandingPageImage("slug", data.logo[0], token);

    createCampaign({
      variables: {
        input: {
          userId: userMetadata.sub,
          title: data.title,
          description: data.description,
          integrations: {
            productHuntPostUrl: data.productHuntPostUrl,
            productHuntReviewsUrl: data.productHuntReviewsUrl,
            twitterCompanyName: data.twitterCompanyName,
            companyTwitterHandle: data.companyTwitterHandle
          },
          landingPageDetails: {
            title: data.pageTitle,
            message: data.pageMessage,
            questions: [data.question1, data.question2, data.question3, data.question4],
            landingPageSlug: data.landingPageSlug,
            logoImageUrl: uploadResponse.data.Location
          },
        }
      }
    }).then((r) => {
      navigate(routes.campaign({id: r.data.createCampaign.id}))
    })
    reset()
    setSubmitting(false)
  };

  return (
    <>
      <MetaTags title="CreateCampaign" description="CreateCampaign page"/>
      <Header sidebarOpen={undefined} setSidebarOpen={undefined}/>

      {/*Content Area*/}
      <div className={"flex flex-col"}>
        <div className="px-8 sm:px-6 lg:px-20 py-8 w-full max-w-9xl mx-auto">
          <div className={'flex justify-between'}>
            <h1 className={"text-5xl font-semibold"}>Create a new Campaign</h1>
            {/*Return To Dashboard Button*/}
            <Link to={routes.dashboard()} className={"btn btn-outline  space-x-2"}>
              <h3>Dashboard</h3>
            </Link>
          </div>

          <div className={"divider"}></div>

          {/* Forms*/}
          <form onSubmit={handleSubmit(onSubmit)} className={'mb-40'}>
            <CreateCampaignDetailsForm register={register} errors={errors}/>
            <CreateCampaignLandingPageFormSection register={register} watch={watch} errors={errors}/>
            <CreateCampaignIntegrationsForm register={register} errors={errors}/>
            {/*Create Campaign Button*/}
            <div className={'divider'}></div>
            <div className={"mt-16 flex justify-end py-12"}>
              <button className={"btn btn-primary btn-wide  ml-12 space-x-2"}>
                {submitting ? (
                  <>
                    <div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                  </>
                ) : (
                  <>
                    <input type="submit"/>
                    <ArrowRightIcon className={"w-6 h-6"}/>
                  </>
                )}
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}

export default CreateCampaignPage
