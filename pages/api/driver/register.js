import middleware from '../../../middleware/middleware'
import nextConnect from 'next-connect'
import { uploadFile } from '../../../lib/s3'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
    try {
        for (let key in req.files) {
            await uploadFile(req.files[key][0], 'ndjsanfjikasnfiqu3rf3g4')
        }
    } catch (error) {
        res.status(500).json({error: 'internal server error'})
    }
    res.status(200).json({})
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler