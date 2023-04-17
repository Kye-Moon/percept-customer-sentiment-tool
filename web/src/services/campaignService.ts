import {convertToBase64} from "src/utils/imageUtils";
import {useAuth} from "../../auth";
import React from "react";
interface UploadResponse {
  data: {
    Bucket: string,
    ETag:string,
    Key:string,
    Location:string,
    ServerSideEncryption:string,
    key:string,
  }
  message: string
}

export const uploadCampaignLandingPageImage = async (campaignSlug: string, image: File, token:string):Promise<UploadResponse> =>  {

  const logoImage = await convertToBase64(image)
  const uploadResult = await fetch('http://localhost:8910/.redwood/functions/uploadLandingPageImage', {
    method: 'POST',
    body: JSON.stringify({image: logoImage, campaignSlug: "slug"}),
    headers: {
      'Authorization': 'Bearer ' + token,
      'auth-provider': 'auth0',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    }
  })
  return uploadResult.json()
}
