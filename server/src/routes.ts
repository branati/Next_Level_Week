import express, { text } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController'



const routes = express.Router();

const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionsController();




routes.get('/teste', (request, response) => {
    return response.json({ message: 'Hello World' })

    //return response.send('hello')
    console.log('acessou a rota');
})

routes.post('/classes', classesControllers.create);

routes.get('/classes', classesControllers.index);

routes.post('/connections', connectionsControllers.create);

routes.get('/connections', connectionsControllers.index);


export default routes;

