import { createReadStream } from 'fs'
import S3 from 'aws-sdk/clients/s3'

const bucketName = process.env.APP_AWS_BUCKET_NAME
const region = process.env.APP_AWS_BUCKET_REGION
const accessKeyId = process.env.APP_AWS_ACCESS_KEY
const secretAccessKey = process.env.APP_AWS_SECRET_KEY

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey
})

// uploads a file to s3
function uploadFile(file, id) {
  // console.log(file.originalFilename, id, file.fieldName)
  let newFileName = file.fieldName + '/' + id
  const fileStream = createReadStream(file.path)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: newFileName
  }

  return s3.upload(uploadParams).promise()
}
const _uploadFile = uploadFile
export { _uploadFile as uploadFile }


// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName
  }

  return s3.getObject(downloadParams).createReadStream()
}
const _getFileStream = getFileStream
export { _getFileStream as getFileStream }