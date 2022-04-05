export default function arrayToCSV (data) {
    const csv = data.map(row => {
        row.createdAt = new Date(row.createdAt).toDateString()
        delete row.updatedAt
        delete row.__v
        delete row.how
        return Object.values(row)
    })
    csv.unshift(Object.keys(data[0]));
    return csv.join('\n');
}