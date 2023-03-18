import db from "../../../database/db";
import userAuth from "../../../middleware/auth";



async function handler(req, res) {
    try {
        console.log("req.body", JSON.parse(req.body))
        await db.query(`INSERT INTO answer SET ?`, JSON.parse(req.body))
        db.end()

        return res.status(200).json({msg: 'เพิ่ม comment เรียบร้อยแล้ว!'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export default userAuth(handler)