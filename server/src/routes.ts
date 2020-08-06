import express from 'express';
import ClassesController from './controllers/ClassesControler';
import ConnectionController from './controllers/ConnectionController';

const routes  = express.Router()
const classesControllers = new ClassesController();
const connectionsController = new ConnectionController()

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create)

export default routes