import { Request, Response } from "express";
import { getAllRole } from "../services/RoleService";
import { log } from "node:console";

const handleGetAllRole = async (req: Request, res: Response) => {
    const roles = await getAllRole();
    res.render('create-user.ejs', {
        roles: roles
    });
}

export { handleGetAllRole }