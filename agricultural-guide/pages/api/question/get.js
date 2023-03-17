import db from "../../../database/db";


async function hanlder(req, res) {
    try {
        const { limit } = req.headers
        const res = await db.query(`SELECT * FROM question ${limit ? `LIMIT ${limit}` : ''}`)

        return res.status(200).json(res);
    } catch (err) {
        console.error("[get-question] - ", err.message);
        return res.status(500).json({msg: err.message})
    }
}

export default hanlder;