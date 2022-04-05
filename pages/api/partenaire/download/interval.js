import dbConnect from '../../../../lib/dbConnect'
import Driver from '../../../../models/Driver'
import arrayToCSV from '../../../../lib/arrayToCsv'
import stream from 'stream'
import { promisify } from 'util'

export default async function handler(req, res) {
    const { from, to } = req.query
    const pipeline = promisify(stream.pipeline);
    await dbConnect()
    try {
        res.setHeader('Content-Type', 'application/csv')
        res.setHeader('Content-Disposition', 'attachment; filename=drivers.csv')
        const result = await Driver.find(
            {createdAt: {$gte: new Date(from)}, createdAt: {$lte: new Date(to)}}
            )
        if (result.length === 0) {
            await pipeline('', res)
            return
        }
        const drivers = JSON.parse(JSON.stringify(result))
        const csv = arrayToCSV(drivers)
        await pipeline(csv, res)
        // update driver check status
        await Driver.updateMany({isCheck: false}, {isCheck: true})
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false })
    }
}