import db from '../../../../database/db';
import adminAuth from '../../../../middleware/adminAuth';


async function handler(req, res) {
    try {
        console.log("req.body ---> ", req.body);
        const data = JSON.parse(req.body);
        await db.query(`INSERT INTO posts SET ?`, data);
        db.end();

        return res.status(200).json({msg: "Create post successful."})
    } catch (err) {
        console.log("[post]Error ---> ", err)
        return res.status(500).json({msg: err.message})
    }
}

export default adminAuth(handler);