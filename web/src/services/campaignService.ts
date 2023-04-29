import {UploadResponse} from "src/interfaces";
import {FormData} from "src/components/Forms/schemas";
import {CreateCampaignInput} from "types/graphql";
import {CreateOrUpdateCampaignInput} from "$api/types/graphql";
import {removeEmptyFields} from "src/utils/formUtils";
import {bool} from "yup";
import {awsRequest} from "serverless-lift/dist/src/classes/aws";
import {ImageUploadType, uploadImageToS3} from "src/utils/imageUtils";

interface CreateCampaignProps {
  data: any
  updateLogo: boolean
  authToken: string
}

interface ConvertToCreateOrUpdateInputProps {
  data: any
  S3Link?: string
}

interface GetCampaignFormInitialValuesProps {
  data: any
}

interface SubmitCampaignFormProps {
  data: FormData
  logoChanged: boolean
  campaignId: number
}

interface UploadCampaignImageProps {
  data: FormData
  authToken: string // needed to authenticate with S3
}

export const campaignService = (function () {

    const submitCampaignImage = async ({data, authToken}: UploadCampaignImageProps) => {
      return await uploadImageToS3({
        image: data.logo[0],
        type: ImageUploadType.CAMPAIGN_LANDING_PAGE,
        identifier: data.landingPageSlug,
        token: authToken
      });
    }

    const getCreateOrUpdateCampaignInputsFromFormData = async ({
                                                        data,
                                                        updateLogo,
                                                        authToken
                                                      }: CreateCampaignProps): Promise<CreateOrUpdateCampaignInput> => {
      let uploadResponse: UploadResponse | undefined = undefined
      if (updateLogo) {
        uploadResponse = await submitCampaignImage({data: data, authToken: authToken})
      }

      return convertToCreateOrUpdateInput({data: data, S3Link:uploadResponse?.data.Location})
    }


    const getCampaignFormInitialValues = ({data}: GetCampaignFormInitialValuesProps): FormData => {
      return {
        logo: data.campaignLandingPage?.LogoUrl,
        pageTitle: data.campaignLandingPage?.PageTitle,
        pageMessage: data.campaignLandingPage?.pageMessage,
        question4: data.campaignLandingPage?.questionFour,
        question1: data.campaignLandingPage?.questionOne,
        question3: data.campaignLandingPage?.questionThree,
        question2: data.campaignLandingPage?.questionTwo,
        companyTwitterHandle: data.integrations[0]?.companyTwitterHandle,
        productHuntPostUrl: data.integrations[0]?.productHuntPostUrl,
        productHuntReviewsUrl: data.integrations[0]?.productHuntReviewsUrl,
        twitterCompanyName: data.integrations[0]?.twitterCompanyName,
        description: data.description,
        landingPageSlug: data.landingPageSlug,
        title: data.title
      }
    }

    const convertToCreateOrUpdateInput = ({data,S3Link}: ConvertToCreateOrUpdateInputProps): CreateOrUpdateCampaignInput => {
      const cleanedFromData = removeEmptyFields(data)
      return {
        title: cleanedFromData.title,
        description: cleanedFromData.description,
        integrations: {
          companyTwitterHandle: cleanedFromData.companyTwitterHandle,
          twitterCompanyName: cleanedFromData.twitterCompanyName,
          productHuntPostUrl: cleanedFromData.productHuntPostUrl,
          productHuntReviewsUrl: cleanedFromData.productHuntReviewsUrl
        },
        landingPageDetails: {
          title: cleanedFromData.pageTitle,
          message: cleanedFromData.pageMessage,
          questions: [cleanedFromData.question1, cleanedFromData.question2, cleanedFromData.question3, cleanedFromData.question4],
          landingPageSlug: cleanedFromData.landingPageSlug,
          ...(S3Link && {logoImageUrl: S3Link}) // don't add logoImageUrl if it's not defined
        }
      } as CreateCampaignInput
    }


    return {
      getCampaignFormInitialValues,
      getCreateOrUpdateCampaignInputsFromFormData
    }

  }
)
();


