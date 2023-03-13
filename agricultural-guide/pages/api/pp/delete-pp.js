import db from "../../../database/db";



export default async function handler(req, res) {
    try {
        await db.query(`DELETE`)
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}