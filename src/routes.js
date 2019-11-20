import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res, next) => {
  const user = await User.create({
    name: 'Matheus Cruz',
    email: 'matheuscruz.dev@gmail.com',
    password_hash: '123456',
  });

  return res.json(user);
});

export default routes;
