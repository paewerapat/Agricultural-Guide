import db from "../../../database/db"
import userAuth from "../../../middleware/auth";


async function handler(req, res) {
    try {
        await db.query(`INSERT INTO plant_price SET ?`, JSON.parse(req.body));
        return res.status(200).json({msg: "เพิ่มพืชเรียบร้อยแล้ว!"})
    } catch (err) {
        return res.status(500).json({msg: err})
    }
}

export default userAuth(handler)