import type {APIGatewayEvent, Context} from 'aws-lambda'
import {authDecoder} from "@redwoodjs/auth-auth0-api";
import {getCurrentUser, isAuthenticated} from "src/lib/utils/auth";
import {logger} from 'src/lib/utils/logger'
import {PutObjectRequest} from "aws-sdk/clients/s3";
import {useRequireAuth} from "@redwoodjs/graphql-server";

const AWS = require('aws-sdk')

const s3 = new AWS.S3()
const BUCKET_NAME = process.env.AWS_IMAGE_BUCKET

/**
 * Uploads a landing page image to S3
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const myHandler = async (event: APIGatewayEvent, _context: Context) => {
  if (isAuthenticated()) {
    try {
      const {body} = event
      const {image, uploadType,identifier } = JSON.parse(body)
      const base64Data = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ''), 'base64')
      const imgType = image.split(';')[0].split('/')[1]
      const params: PutObjectRequest = {
        Bucket: BUCKET_NAME,
        Key: `images/${uploadType}/${identifier}/${Date.now()}.${imgType}`,
        Body: base64Data,
        ContentEncoding: 'base64',
        ContentType: `image/${imgType}`,
      }
      const uploadResult = await s3.upload(params).promise()
      logger.info(`uploadResult: ${JSON.stringify(uploadResult)}`)
      return ResponseObject({statusCode: 200, returnData: uploadResult, message: "Image Successfully Uploaded"})
    } catch (e) {
      console.log('error: ', e)
      return ResponseObject({statusCode: 500, returnData: null, message: e})
    }
  } else {
    return ResponseObject({statusCode: 401, returnData: null, message: "Unauthdorized"})
  }
}

export const handler = useRequireAuth({
  handlerFn: myHandler,
  getCurrentUser,
  authDecoder,
})

const ResponseObject = ({statusCode, returnData, message}) => {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: message,
      data: returnData
    }),
  }
}
