import dbConnect from '../../../lib/dbConnect'
import Driver from '../../../models/Driver'

export default async function handler(req, res) {
    const { curr, limit } = req.query
    await dbConnect()
    // console.log(req.body)
    try {
        const driverCount = await Driver.countDocuments()
        const drivers = await Driver.
            find({}).
            skip(Number(curr)).
            limit(Number(limit)).
            sort({createdAt: -1})
        console.log(drivers)
        console.log('the count is ', driverCount)
        res.status(200).json(drivers)
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

