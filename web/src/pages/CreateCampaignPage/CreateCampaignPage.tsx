import {Link, navigate, routes} from '@redwoodjs/router'
import {MetaTags} from '@redwoodjs/web'
import Header from "src/components/Header/Header";
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/20/solid";
import {CreateCampaignDetailsForm} from "src/components/Forms/CreateCampaignDetailsForm";
import {CreateCampaignIntegrationsForm} from "src/components/Forms/CreateCampaignIntergrationsForm";
import {useAuth} from "@redwoodjs/auth";
import {useMutation} from "@redwoodjs/web";
import {SubmitHandler, useForm} from "react-hook-form";
import {CREATE_CAMPAIGN} from "src/graphql/mutations";

interface FormInputs {
  title: string,
  description: string,
  productHuntPostUrl: string,
  productHuntReviewsUrl: string,
  twitterCompanyName: string,
  companyTwitterHandle: string,
}

interface CreateCampaignInputs extends FormInputs {
  userId: string
}

``

const CreateCampaignPage = () => {
  const {userMetadata} = useAuth()
  const {register, handleSubmit, watch, formState: {errors}} = useForm<FormInputs>();
  const [createCampaign] = useMutation(CREATE_CAMPAIGN)
  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
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
          }
        }
      }
    }).then((r)=> {
      console.log(r)
      navigate(routes.dashboard())


    })
  };

  return (
    <>
      <MetaTags title="CreateCampaign" description="CreateCampaign page"/>
      <Header sidebarOpen={undefined} setSidebarOpen={undefined}/>

      {/*Return To Dashboard Button*/}
      <Link to={routes.dashboard()} className={"btn btn-outline ml-12 space-x-2"}>
        <ArrowLeftIcon className={"w-6 h-6"}/>
        <h3>Dashboard</h3>
      </Link>

      {/*Content Area*/}
      <div className={"flex flex-col"}>
        <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <h1 className={"text-2xl font-semibold"}>Create a new Campaign</h1>
          <div className={"divider"}></div>

          {/* Forms*/}
          <form onSubmit={handleSubmit(onSubmit)}>
            <CreateCampaignDetailsForm register={register}/>
            <CreateCampaignIntegrationsForm register={register}/>
            {/*Create Campaign Button*/}
            <div className={"mt-16 flex justify-end "}>
              <button className={"btn btn-outline ml-12 space-x-2"}>
                <input type="submit"/>
                <ArrowRightIcon className={"w-6 h-6"}/>
              </button>
            </div>
          </form>


        </div>
      </div>
    </>
  )
}

export default CreateCampaignPage
