import AsyncRootRoute from '../container/AsyncRootRoute';
import AsyncHomeRoute from '../container/AsyncHomeRoute';
import AsyncCounterRoute from '../container/AsyncCounterRoute';
import AsyncPostsRoute from '../container/AsyncPostsRoute';
import AsyncAboutRoute from '../container/AsyncAboutRoute';
import Error404 from '../container/Error404';

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
