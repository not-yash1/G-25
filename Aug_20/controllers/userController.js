import { User } from "../models/userModel.js"

export const createUser = async (req, res) => {
    try {
        // Parsing body
        const {name, email, password, username, mobile} = req.body
        // console.log(req.body)

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

        // Sending response
        res.status(201).json({
            success: true,
            message: "User created successfully"
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getUsers = async (req, res) => {
    try {
        // Find Users
        const users = await User.find()

        // Checking conditions
        if(!users){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }
        // Send response
        res.status(200).json({
            success: true,
            users
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getUser = async (req, res) => {
    try {
        // Parse id
        // Find user by id
        // Checking conditions
        // Send response
        
    } catch (error) {
        
    }
}