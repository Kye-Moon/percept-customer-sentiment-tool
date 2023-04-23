// @ts-ignore
import UploadAvatarImage from '../../../images/UploadAvatar.jpeg'
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from '@hookform/resolvers/yup';
import {useState} from "react";
import {handleImageUploadOnChange, ImageUploadType, uploadImageToS3} from "src/utils/imageUtils";
import {removeEmptyFields} from "src/utils/formUtils";
import {useAuth} from "src/auth";
import {UploadResponse} from "types/interfaces";
import {createReview} from "src/services/recommendedMentions/reviews";
import {useMutation} from "@redwoodjs/web";
import {CREATE_REVIEW} from "src/graphql/mutations";
import {SucessRedirectModal} from "src/components/Forms/TextReviewForm/SucessRedirectModal";

const schema = yup.object({
  reviewBody: yup.string().required(),
  reviewAuthor: yup.string().required(),
  reviewAuthorEmail: yup.string().email().required(),
  reviewAuthorAvatar: yup.mixed().notRequired(),
}).required();

export type TextReviewFormData = yup.InferType<typeof schema>;

interface TextReviewFormProps {
  campaignId: number
}

enum submitStatusType {
  IDLE,
  SUBMITTING,
  SUCCESS,
}

export const TextReviewForm = ({campaignId}: TextReviewFormProps) => {
  const auth = useAuth()
  const {register, handleSubmit, watch, reset, formState: {errors}} = useForm<TextReviewFormData>({
    resolver: yupResolver(schema)
  });
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined)
  const [submitStatus, setSubmitStaus] = useState<submitStatusType>(submitStatusType.IDLE)
  const [redirectTimeout, setRedirectTimeout] = useState<number | undefined>(undefined)
  const [createReview] = useMutation(CREATE_REVIEW)
  const successMessage = 'Thank you for your review!'

  const onSubmit: SubmitHandler<TextReviewFormData> = async (data: TextReviewFormData) => {
    setSubmitStaus(submitStatusType.SUBMITTING)
    const cleanData = removeEmptyFields(data)
    const token = await auth.getToken()
    const uploadResponse: UploadResponse = await uploadImageToS3({
        image: data.reviewAuthorAvatar[0],
        type: ImageUploadType.REVIEW_FORM_AVATAR,
        identifier: cleanData.landingPageSlug,
        token: token
      }
    );
    createReview({
      variables: {
        input: {
          body: cleanData.reviewBody,
          mentionSource: 'percept',
          username: cleanData.reviewAuthor,
          userEmailAddress: cleanData.reviewAuthorEmail,
          profileImageUrl: uploadResponse?.data.Location,
        },
        campaignId: campaignId
      }
    }).then((res) => {
      setSubmitStaus(submitStatusType.SUCCESS)
      setImagePreview(undefined)
      reset()
    })
  }

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={'px-40 space-y-12 py-12'}>
          <div>
            <label className="label">
              <span className="label-text">Your Testimonial or Review</span>
            </label>
            <textarea {...register("reviewBody")} className="textarea textarea-bordered w-full"
                      placeholder="Let us know what you think">
          </textarea>
            {errors.reviewBody && <span className={'text-error'}>This field is required</span>}
          </div>
          <div className={'flex space-x-12 '}>
            <div className={'w-1/2'}>
              <label className="label">
                <span className="label-text">Your name</span>
              </label>
              <input {...register("reviewAuthor")} type="text" placeholder="Type here"
                     className="input input-bordered w-full "/>
              {errors.reviewAuthor && <span className={'text-error'}>This field is required</span>}
            </div>
            <div className={'w-1/2'}>
              <label className="label">
                <span className="label-text">Your email</span>
              </label>
              <input {...register("reviewAuthorEmail")} type="text" placeholder="Type here"
                     className="input input-bordered w-full"/>
              {errors.reviewAuthorEmail && <span className={'text-error'}>This field must be a valid email</span>}
            </div>
          </div>
          <div className={'flex space-x-4 '}>
            <div className={''}>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={imagePreview ? imagePreview : UploadAvatarImage} alt={""}/>
                </div>
              </div>
            </div>
            <div className={'w-full'}>
              <input {...register("reviewAuthorAvatar")}
                     onChange={(e) => {
                       handleImageUploadOnChange(e, setImagePreview)
                     }}
                     className="block text-sm text-gray-400 cursor-pointer bg-base-100 focus:outline-none "
                     aria-describedby="file_input_help" id="file_input" type="file"/>
              <label className="label">
                <span className="label-text">Upload your photo </span>
              </label>
              {errors.reviewAuthorAvatar && <span className={'text-error'}>This field is required</span>}
            </div>
          </div>
        </div>
        <div className={'px-40 flex justify-end'}>
          {submitStatus === submitStatusType.SUBMITTING ? (
            <>
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                      <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
              </div>
            </>
          ) : <input className="btn btn-primary btn-wide" type={"submit"}/>
          }

        </div>
        {submitStatus === submitStatusType.SUCCESS &&
          <SucessRedirectModal checked={submitStatus === submitStatusType.SUCCESS} redirectTo={"back"} message={successMessage}/>
        }
      </form>
    </>
  )
}
