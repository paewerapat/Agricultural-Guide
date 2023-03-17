import db from "../../../database/db";


export default async function handler(req, res) {
    try {
        console.log("req.query", req.query);
        const response = await db.query(`SELECT * FROM plant_plot WHERE userId = ?`, req.query.id);
        db.end();
        console.log("response", response)

        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}