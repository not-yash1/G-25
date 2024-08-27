
import express from "express";
import { createUser, deleteUser, getUser, getUsers, loginUser, updateUser } from "../controllers/userController.js";

export const router = express.Router();


router.post("/user", createUser)

router.get("/users", getUsers)

router.get("/get/user/:id", getUser)

router.put("/update/user/:id", updateUser)

router.delete("/delete/user/:id", deleteUser)

router.post("/user/login", loginUser)