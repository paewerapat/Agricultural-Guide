import db from "../../../database/db";


export default async function hanlder(req, res) {
    try {
        const data = await db.query(`SELECT * FROM plant_price`);
        db.end();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({msg: err.message});
    }
}