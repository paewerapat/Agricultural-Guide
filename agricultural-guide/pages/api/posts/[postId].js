import db from "../../../database/db"


export default async function handler(req, res) {
    try {
        const { postId } = req.query;
        const res = await db.query(`SELECT * FROM posts WHERE postId = ${postId}`)
        const post = res[0];

        console.log("post --> ", post)
        return res.status(200).json(post)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}