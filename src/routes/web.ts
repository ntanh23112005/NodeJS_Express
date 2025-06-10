import express, { Express } from 'express';
import { getCreateUserPage, getHomePage, getViewUserPage, postCreateUser, postDeleteUser, postUpdateUser } from '../controllers/UserController'

const router = express.Router();

const webRoutes = (app: Express) => {
    router.get('/', getHomePage);
    router.get('/create-user', getCreateUserPage);
    router.post('/create-user', postCreateUser);
    router.post('/delete-user/:id', postDeleteUser);
    router.get('/view-user/:id', getViewUserPage);
    router.post('/update-user/', postUpdateUser);

    app.use('/', router);
}

export default webRoutes;

