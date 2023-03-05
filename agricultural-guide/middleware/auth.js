import jwt from "jsonwebtoken";

const userAuth = (handler) => {
    return async (req, res) => {
        try {
            const token = req.headers.token;
            const decoded = jwt.verify(token, 'jwtSecret')
            req.user = decoded;
            return handler(req, res)
        } catch (err) {
            return res.status(403).json({msg: "Authentication failed"})
        }
    }
}

export default userAuth;