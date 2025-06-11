import express, { Express } from 'express';
import { createUser, deleteUser, getAllUsers, getUserDetail, updateUser } from '../controllers/UserAPIController';

const router = express.Router();

const apiWebRoutes = (app: Express) => {

    router.route('/users')
        .get(getAllUsers)
        .post(createUser);

    router.route('/users/:id')
        .get(getUserDetail)
        .put(updateUser)
        .delete(deleteUser);

    app.use('/api', router);
}

export default apiWebRoutes;
