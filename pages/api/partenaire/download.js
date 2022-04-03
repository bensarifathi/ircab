import dbConnect from '../../../lib/dbConnect'
import Driver from '../../../models/Driver'
import arrayToCSV from '../../../lib/arrayToCsv'
import stream from 'stream'
import { promisify } from 'util'

export default async function handler(req, res) {
    const pipeline = promisify(stream.pipeline);
    await dbConnect()
    try {
        const result = await Driver.find({})
        const drivers = JSON.parse(JSON.stringify(result))
        const csv = arrayToCSV(drivers)
        res.setHeader('Content-Type', 'application/csv')
        res.setHeader('Content-Disposition', 'attachment; filename=drivers.csv')
        await pipeline(csv, res)
    } catch (error) {
        res.status(400).json({ success: false })
    }
}