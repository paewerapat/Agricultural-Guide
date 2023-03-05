import db from "../../../../database/db"
import adminAuth from "../../../../middleware/adminAuth";



async function handler(req, res) {
    try {
       const { postId } = JSON.parse(req.body); 
       await db.query(`DELETE FROM posts WHERE postId = ${postId}`)
       return res.status(200).json({msg: 'Delete post successful'})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export default adminAuth(handler);