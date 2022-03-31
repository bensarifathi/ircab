import { getFileStream } from '../../../../lib/s3'

export default async function handler(req, res) {
    const key = req.query.slug.join('/')
    const readStream = getFileStream(key)
    readStream.pipe(res)
}