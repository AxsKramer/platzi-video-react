import Home from '../containers/Home';
import Login from '../containers/Login';
import Page404 from '../containers/Page404';
import Register from '../containers/Register';
import Player from '../containers/Player';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  {
    exact: true,
    path: '/player/:id',
    component: Player,
  },
  {
    name: 'NotFound',
    component: Page404,
  },
];

export default routes;