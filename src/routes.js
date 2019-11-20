import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res, next) => res.json('Hello world'));

export default routes;
