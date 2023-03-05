import db from '../../../database/db';
import userAuth from '../../../middleware/auth';

async function handler(req, res) {
    try {
        const { userId } = req.user;
        const { token } = req.headers;
        const finduserId = await db.query(`SELECT * FROM user WHERE userId = ?`, userId);
        if (finduserId.length == 0) return res.status(400).json({msg: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง'});
        db.end();

        const userData = await JSON.parse(JSON.stringify(finduserId.find(value => value.userId === userId)));

        const payload = {
            userId: userData.userId,
            fullName: userData.fullName,
            role: userData.role,
            token: token,
        }
        
        return res.status(200).json({payload});
    } catch (err) {
        console.error("[auth]Error -> ", err)
        return res.status(500).json({msg: err.message})
    }
}

export default userAuth(handler);