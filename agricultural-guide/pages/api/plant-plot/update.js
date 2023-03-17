import db from "../../../database/db";


export default async function handler(req, res) {
    try {
        await db.query(`UPDATE plant_plot SET ? WHERE postId = ${postId}`, JSON.parse(req.body));
        return res.status(200).json({msg: 'อัปเดตแปลงของคุณเรียบร้อยแล้ว!'})
    } catch (err) {
        return res.status(500).json({msg: err.message });
    }
}