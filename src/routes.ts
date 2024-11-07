import express, { Request, Response } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', (req: Request, res: Response) => {
    itemsController.index(req, res).catch(err => {
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

routes.post('/points', (req: Request, res: Response) => {
    pointsController.create(req, res).catch(err => {
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

//routes.get('/points', pointsController.index);

routes.get('/points', (req: Request, res: Response) => {
      pointsController.index(req, res).catch(err => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

routes.get('/points/:id', (req: Request, res: Response) => {
    pointsController.show(req, res).catch(err => {
        res.status(500).json({ error: 'Internal Server Error' });
    });
});


export default routes;
