import db from "../../../database/db"
import userAuth from "../../../middleware/auth";


async function handler(req, res) {
    try {
        const { plantId, plantName, plantType, plantPrice, plantDesc } = JSON.parse(req.body);
        const updateData = {
            plantName, plantType, plantPrice, plantDesc
        }
        await db.query(`UPDATE plant_price SET ? WHERE plantId = ${plantId}`, updateData);
        return res.status(200).json({msg: "แก้ไขพืชเรียบร้อยแล้ว!"})
    } catch (err) {
        return res.status(500).json({msg: err})
    }
}

export default userAuth(handler)