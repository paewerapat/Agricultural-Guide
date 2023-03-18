import db from "../../../database/db";
import userAuth from "../../../middleware/auth";



async function handler(req, res) {
    try {
        // const data = await db.query(`SELECT * FROM answer WHERE questionId = ?`, req.query.id)
        db.end()

        return res.status(200).json(data)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export default userAuth