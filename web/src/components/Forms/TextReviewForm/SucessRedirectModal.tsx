import {useEffect} from "react";

interface SucessRedirectModalProps {
  checked: boolean
  redirectTo: string
  message: string
}

export const SucessRedirectModal = ({checked, redirectTo, message}) => {
  const redirect = () => {
    switch (redirectTo) {
      case 'back':
         history.back()
        break;
    }
  }

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
       redirect()
    }, 5000);
  }, []);

  return (
    <>
      <input checked={checked} type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-4xl">Success!</h3>
          <p className="py-4 text-2xl ">{message}</p>
          <p className="py-4 text-2xl ">You will be redirected in 5 just a second</p>
        </div>
      </div>
    </>
  )
}
