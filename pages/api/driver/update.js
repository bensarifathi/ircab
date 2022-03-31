import middleware from '../../../middleware/middleware'
import nextConnect from 'next-connect'
import { uploadFile } from '../../../lib/s3'

const handler = nextConnect()
handler.use(middleware)

handler.post(async (req, res) => {
    const id = req.body.driverId[0]
    const folderName = req.body.folder[0]
    try {
        await uploadFile(req.files[folderName][0], id)
        console.log(res)
        res.status(200).json({})
    } catch (err) {
        res.status(500).json({error: 'internal server error'})
    }
})

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler