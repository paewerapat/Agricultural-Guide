import db from "../../../database/db"


export default async function handler(req, res) {
    try {
        const data = await db.query(`SELECT * FROM plant_price WHERE plantId = ${req.query.id}`);
        db.end();

        return res.status(200).json(data[0])
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}