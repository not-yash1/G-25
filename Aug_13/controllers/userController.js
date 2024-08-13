import { User } from "../models/userModel"

export const createUser = async (req, res) => {
    try {
        // Parsing body
        const {name, email, password, username, mobile} = req.body

        // Checking body data
        if(!name || !email || !password || !username || !mobile) {
            return res.status(400).json({
                success: false,
                message: "Please enter all fields..."
            })
        }

        // Creating user
        const user = await User.create({
            name,
            email,
            password,
            username,
            mobile
        })

        
    } catch (error) {
        
    }
}