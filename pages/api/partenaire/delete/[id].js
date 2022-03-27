import dbConnect from '../../../../lib/dbConnect'
import Driver from '../../../../models/Driver'

export default async function handler(req, res) {
    await dbConnect()
    const { id } = req.query
    console.log(req.query)
    try {
        const driver = await Driver.findByIdAndDelete(
          id
        ) /* create a new model in the database */
        res.status(200).json({})
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

