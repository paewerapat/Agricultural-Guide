import db from "../../../../database/db"
import adminAuth from "../../../../middleware/adminAuth";



async function handler(req, res) {
    try {
        const { postId, title, data } = JSON.parse(req.body); 
        const updateData = {
            title, data
        }
        await db.query(`UPDATE posts SET ? WHERE postId = ${postId}`, updateData)
        return res.status(200).json({msg: 'Update post successful'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export default adminAuth(handler);