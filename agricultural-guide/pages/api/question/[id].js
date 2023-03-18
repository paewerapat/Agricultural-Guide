import db from "../../../database/db";
import userAuth from "../../../middleware/auth";



async function handler(req, res) {
    try {
        console.log("req,query", req.query)
        const data = await db.query(`SELECT * FROM question WHERE userId = ?`, req.query.userId)
        db.end();

        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export default userAuth(handler)