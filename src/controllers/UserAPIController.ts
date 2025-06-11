import { RequestHandler } from "express";
import {
    getAllUser,
    getUserById,
    handleCreateUser,
    handleDeleteUser,
    handleUpdateUser
} from "../services/UserService";

const getAllUsers: RequestHandler = async (req, res) => {
    try {
        const users = await getAllUser();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const createUser: RequestHandler = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await handleCreateUser(name, email);
        res.status(201).json({ success: true, message: "User created", data: newUser });
    } catch (error) {
        res.status(400).json({ success: false, message: "Invalid input" });
    }
};

const deleteUser: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        await handleDeleteUser(id);
        res.json({ success: true, message: "User deleted" });
    } catch (error) {
        res.status(404).json({ success: false, message: "User not found" });
    }
};

const getUserDetail: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await getUserById(id);
        if (!user) {
            res.status(404).json({ success: false, message: "User not found" });
            return;
        }
        res.json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

const updateUser: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullName, email } = req.body;
        const updatedUser = await handleUpdateUser(id, fullName, email);
        res.json({ success: true, message: "User updated", data: updatedUser });
    } catch (error) {
        res.status(400).json({ success: false, message: "Failed to update user" });
    }
};

export {
    getAllUsers,
    createUser,
    deleteUser,
    getUserDetail,
    updateUser
};