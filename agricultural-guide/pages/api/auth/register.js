import db from '../../../database/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
    try {
        const { fullName, userId, password } = JSON.parse(req.body);

        const finduserId = await db.query(`SELECT * FROM user WHERE userId = ?`, userId);
        if (finduserId.length > 0) return res.status(400).json({msg: 'เบอร์โทรศัพท์นี้มีในระบบเรียบร้อยแล้ว.'});

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newData = {
            fullName,
            userId,
            password: hashPassword
        }
        
        await db.query(`INSERT INTO user SET ?`, newData);
        db.end();
        return res.status(200).json({msg: 'Register successful!'});
    } catch (err) {
        console.error("[auth]Error -> ", err)
        return res.status(500).json({msg: err.message})
    }
}