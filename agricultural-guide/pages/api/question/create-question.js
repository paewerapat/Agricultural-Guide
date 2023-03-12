import db from "../../../database/db";
import userAuth from "../../../middleware/auth";


async function handler(req, res) {
    try {
        const { questionInfo, userId } = JSON.parse(req.body);
        await db.query(`INSERT INTO question SET ?`, JSON.parse(req.body));

        return res.status(200).json({msg: "Create question successful"})
    } catch (err) {
        console.error("[create-question] - ", err.message);
        return res.status(500).json({msg: err.message})
    }
}

export default userAuth(handler)