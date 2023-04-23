import {ImageUploadType} from "src/utils/imageUtils";

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
