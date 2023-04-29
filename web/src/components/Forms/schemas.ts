import * as yup from "yup";

export const createEditCampaignSchema = yup.object({
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

export type FormData = yup.InferType<typeof createEditCampaignSchema>;
