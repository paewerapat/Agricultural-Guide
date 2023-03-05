import db from '../../../database/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    try {
        const { userId, password } = JSON.parse(req.body);

        const user = await db.query(`SELECT * FROM user WHERE userId = ?`, userId);
        if (user.length == 0) return res.status(400).json({msg: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง'});
        db.end();

        const userData = await JSON.parse(JSON.stringify(user.find(value => value.userId === userId)));
        // console.log("userData ---> ", userData)

        const isMatch = await bcrypt.compare(password, userData.password);
        // console.log("isMatch ---> ", isMatch)
        if(!isMatch) return res.status(400).json({msg: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง'});

        const payload = {
            userId: userData.userId,
            fullName: userData.fullName,
            role: userData.role
        }

        jwt.sign(payload, "jwtSecret", {
            expiresIn: '7d'
        }, (err, token) => {
            if(err) return res.status(500).json({msg: err})
            return res.status(200).json({
                msg: 'Login successful!',
                token,
                payload
            })
        })
    } catch (err) {
        console.error("[auth]Error -> ", err)
        return res.status(500).json({msg: err.message})
    }
}