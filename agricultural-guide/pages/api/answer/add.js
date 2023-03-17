import userAuth from "../../../middleware/auth";



async function handler(req, res) {
    try {
        
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

export default userAuth