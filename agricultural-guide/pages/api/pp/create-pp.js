import db from "../../../database/db"


export default async function handler(req, res) {
    try {
        const res = await db.query(`INSERT INTO `)
    } catch (err) {
        return res.status(500).json({msg: err})
    }
}