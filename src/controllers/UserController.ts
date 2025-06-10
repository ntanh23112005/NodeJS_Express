import { Request, Response } from "express";
import { getAllUser, getUserById, handleCreateUser, handleDeleteUser, handleUpdateUser } from "../services/UserService";
import { name } from "ejs";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();

    return res.render('home.ejs', {
        users: users
    });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render('create-user.ejs');
}

const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email } = req.body;
    await handleCreateUser(fullName, email);
    res.redirect('/');
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    res.redirect('/');
}

const getViewUserPage = async (req: Request, res: Response) => {
    const { id } = req.params;
    const userById = await getUserById(id);
    return res.render('view-user.ejs', {
        id: id,
        user: userById,
    });
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, fullName, email } = req.body;
    await handleUpdateUser(id, fullName, email);
    res.redirect('/');
}

export {
    getHomePage, getCreateUserPage, postCreateUser, postDeleteUser,
    getViewUserPage, postUpdateUser
};