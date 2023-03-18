import db from "../../../database/db";


export default async function handler(req, res) {
    try {
        const response = await db.query(`SELECT * FROM plant_plot WHERE userId = ${req.query.id}`);
        db.end();

        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}