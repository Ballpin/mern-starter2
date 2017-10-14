import AsyncRootRoute from '../components/MainApp/AsyncRootRoute';
import AsyncHomeRoute from '../components/MainApp/AsyncHomeRoute';
import AsyncCounterRoute from '../components/MainApp/AsyncCounterRoute';
import AsyncPostsRoute from '../components/MainApp/AsyncPostsRoute';
import AsyncAboutRoute from '../components/MainApp/AsyncAboutRoute';
import Error404 from '../components/MainApp/Error404';

const routes = [
  {
    component: AsyncRootRoute,
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
        path: '/posts',
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
