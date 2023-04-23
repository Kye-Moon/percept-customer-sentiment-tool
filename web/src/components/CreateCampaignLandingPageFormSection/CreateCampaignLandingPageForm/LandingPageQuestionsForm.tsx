import {PlusIcon} from "@heroicons/react/24/solid";
import {UseFormRegister, UseFormWatch} from "react-hook-form";
import {FormInputs} from "src/pages/CreateCampaignPage/CreateCampaignPage";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline";

export interface FormSectionProps {
  register: UseFormRegister<FormInputs>;
}

export const LandingPageQuestionsForm = ({register}: FormSectionProps) => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-3" className="btn btn-primary btn-sm">
        <PlusIcon className="w-4 h-4 mr-2"/>
        Add Questions
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle"/>
      <div className="modal ">
        <div className="modal-box bg-white relative ">
          <label htmlFor="my-modal-3" className="btn btn-ghost btn-sm bg-white text-base-100   absolute right-2 top-2">✕</label>
          <div className={'pt-6'}>
            <h3 className="text-xl text-primary font-bold px-2 ">Add some questions to your landing page</h3>
            <div className=" w-full flex flex-col py-12  space-y-4">
            <span className={'flex space-x-4'}>
              <QuestionMarkCircleIcon className={'w-12 h-12 text-primary'}/>
              <input {...register("question1")} type="text" placeholder="Ask your users a question" className="input input-bordered w-full "/>
            </span>
              <span className={'flex space-x-4'}>
              <QuestionMarkCircleIcon className={'w-12 h-12 text-primary '}/>
              <input {...register("question2")} type="text" placeholder="...." className="input input-bordered w-full "/>
            </span>
              <span className={'flex space-x-4'}>
              <QuestionMarkCircleIcon className={'w-12 h-12 text-primary'}/>
              <input {...register("question3")} type="text" placeholder="...." className="input input-bordered w-full "/>
            </span>
              <span className={'flex space-x-4'}>
              <QuestionMarkCircleIcon className={'w-12 h-12 text-primary'}/>
              <input {...register("question4")} type="text" placeholder="...." className="input input-bordered w-full "/>
            </span>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <div className="btn btn-primary ">Save</div>
          </div>


        </div>
      </div>
    </>
  )
}
