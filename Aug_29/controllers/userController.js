import { User } from "../models/userModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
    try {
        // Parsing body
        const {name, email, password, username, mobile} = req.body

        // Checking body data
        if(!name || !email || !password || !username || !mobile){
            return res.status(400).json({
                success: false,
                message: "Please enter all fields..."
            })
        }

        // Check user
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        // Creating user
        user = await User.create({
            name,
            email,
            password,
            username,
            mobile
        })

        const token = await user.generateToken()

        const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            httpOnly: true,
            sameSite: "none",
            secure: true
        }

        res.cookie("token", token, options).status(201).json({
            success: true,
            message: "User created successfully",
            user,
            token
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
        const id = req.params.id
        
        // Find user by id
        const user = await User.findById(id)

        // Checking conditions
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }

        // Send response
        res.status(200).json({
            success: true,
            user
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        // Parsing body data
        const {name, email, password, mobile, username} = req.body;

        // Parsing id
        const id = req.params.id

        // Checking body data
        if(!name && !email && !password && !mobile && !username){
            return res.status(400).json({
                success: false,
                message: "Please provide all fields"
            })
        }

        // Finding user
        const user = await User.findById(id)

        // Checking user
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }

        // Updating user
        if(name) user.name = name
        if(email) user.email = email
        if(password) user.password = password
        if(mobile) user.mobile = mobile
        if(username) user.username = username

        await user.save();

        // Sending response
        res.status(200).json({
            success: true,
            message: "User updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        // Parsing id
        const id = req.params.id

        // Finding user
        const user = await User.findById(id)

        // Checking user
        if(!user){
            return res.status(404).json({
                success: false,
                message: "No user found"
            })
        }

        // Deleting user
        await User.findByIdAndDelete(id);

        // Sending response
        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const loginUser = async (req, res) => {
    try {
        // Parsing body data
        const { email, password } = req.body;

        // Check body data
        if(!email || !password){
            return res.status(400).josn({
                success: false,
                message: "Provide all the fields"
            })
        }

        // Find user
        const user = await User.findOne({ email }).select("+password")

        // Check user
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        // Compare password
        const isMatch = user.comparePassword(password);

        if(!isMatch){
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        // Token generate
        const token = await user.generateToken();

        // Sending response
        const options = {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
            secure: true,
            httpOnly: true,
            sameSite: "none"
        }

        res.cookie("token", token, options).status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}