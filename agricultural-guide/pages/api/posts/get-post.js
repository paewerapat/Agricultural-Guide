import db from "../../../database/db";


export default async function handler(req, res) {
    try {
        const posts = await db.query(`SELECT * FROM posts`);
        db.end();

        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}