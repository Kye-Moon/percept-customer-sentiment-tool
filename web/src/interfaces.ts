import {ImageUploadType} from "src/utils/imageUtils";
import {FieldErrors, UseFormRegister, UseFormWatch} from "react-hook-form";
import {FormData} from "src/components/Forms/schemas";
import React from "react";

export interface UploadResponse {
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

export interface ImageUploadProps {
  image: File
  type: ImageUploadType
  identifier: string
  token: string
}

export interface CampaignInitialValues {
  description: string,
  landingPageSlug: string,
  status: string,
  title: string,
  campaignLandingPage: {
    LogoUrl: string
    PageTitle: string
    campaignSlug: string
    pageMessage: string
    questionOne: string
    questionTwo: string
    questionThree: string
    questionFour: string
  }
  integrations: {
    companyTwitterHandle: string,
    productHuntPostUrl: string,
    productHuntReviewsUrl: string,
    twitterCompanyName: string,
  }
}

export interface CreateCampaignLandingPageFormSectionProps {
  register?: UseFormRegister<FormData>;
  watch?: UseFormWatch<FormData>;
  setImagePreview?: void | ((imagePreview: string) => void);
  imagePreview?: string;
  errors?: FieldErrors<FormData>;
  setLogoChanged?: React.Dispatch<React.SetStateAction<boolean>>
}

export interface CreateCampaignPageProps{
  action: CreateEditAction
  campaignId?: number
}

export enum CreateEditAction {
  CREATE = 'create',
  EDIT = 'edit'
}
