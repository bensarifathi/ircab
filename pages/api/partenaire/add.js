import dbConnect from '../../../lib/dbConnect'
import Driver from '../../../models/Driver'

export default async function handler(req, res) {
    await dbConnect()
    console.log(req.body)
    try {
        const driver = await Driver.create(
          req.body
        ) /* create a new model in the database */
        console.log(driver)
        res.status(201).json({ success: true, data: driver })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

