import db from "../../../database/db";


async function hanlder(req, res) {
    try {
        const { limit } = req.headers
        // ${limit ? `LIMIT ${limit}` : ''}
        const data = await db.query(`SELECT * FROM question JOIN user ON user.userId = question.userId ${limit ? `LIMIT ${limit}` : ''}`)
        db.end();

        return res.status(200).json(data);
    } catch (err) {
        console.error("[get-question] - ", err.message);
        return res.status(500).json({msg: err.message})
    }
}

export default hanlder;