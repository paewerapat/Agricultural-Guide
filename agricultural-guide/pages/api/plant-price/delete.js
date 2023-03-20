import db from "../../../database/db"


export default async function handler(req, res) {
    try {
        console.log("req.headers", req.headers)
        await db.query(`DELETE FROM plant_price WHERE plantId = ${req.headers.plantid}`);
        db.end();

        return res.status(200).json({msg: 'ลบพืชเรียบร้อยแล้ว!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}