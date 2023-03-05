const adminAuth = (handler) => {
    return async (req, res) => {
        try {
            const token = req.headers.token;
            const decoded = jwt.verify(token, 'jwtSecret')
            if(decoded.role !== "admin") return res.status(403).json({msg: "Authentication failed"})
            req.admin = decoded;
            return handler(req, res)
        } catch (err) {
            return res.status(403).json({msg: "Authentication failed"})
        }
    }
}

export default adminAuth;