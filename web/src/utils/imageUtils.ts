import {ImageUploadProps, UploadResponse} from "types/interfaces";

export const convertToBase64 = (file: File) => new Promise((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);

  fileReader.onload = () => {
    resolve(fileReader.result);
  };

  fileReader.onerror = (error) => {
    reject(error);
  };
  fileReader.onloadend = () => {
    return fileReader.result.toString()
  }
});

export function handleImageUploadOnChange(event, setImagePreview){
  if(event.target.files.length > 0){
    setImagePreview(URL.createObjectURL(event.target.files[0]))
  }
}


export const uploadImageToS3 = async ({image, type, identifier, token}:ImageUploadProps):Promise<UploadResponse> =>  {

  const logoImage = await convertToBase64(image)
  const uploadResult = await fetch('http://localhost:8910/.redwood/functions/uploadLandingPageImage', {
    method: 'POST',
    body: JSON.stringify({image: logoImage, uploadType: type, identifier: identifier}),
    headers: {
      'Authorization': 'Bearer ' + token,
      'auth-provider': 'auth0',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    }
  })
  return uploadResult.json()
}

export enum ImageUploadType {
  CAMPAIGN_LANDING_PAGE = "CAMPAIGN_LANDING_PAGE",
  REVIEW_FORM_AVATAR = "REVIEW_FORM_AVATAR",
}
