import AppRoot from '../components/AppRoot';
import AsyncCounterRoute from '../components/AppRoot/AsyncCounterRoute';
import AsyncPostsRoute from '../components/AppRoot/AsyncPostsRoute';
import AsyncAboutRoute from '../components/AppRoot/AsyncAboutRoute';
import Error404 from '../components/AppRoot/Error404';

const routes = [
  {
    component: AppRoot,
    routes: [
      {
        path: '/',
        exact: true,
        component: AsyncHomeRoute,
      },
      {
        path: '/counter',
        component: AsyncCounterRoute,
      },
      {
        path: '/post',
        component: AsyncPostsRoute,
      },
      {
        path: '/about',
        component: AsyncAboutRoute,
      },
      {
        path: '*',
        component: Error404,
      },
    ],
  },
];

export default routes;
