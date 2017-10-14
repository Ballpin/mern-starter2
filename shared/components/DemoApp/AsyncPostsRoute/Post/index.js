import { asyncComponent } from 'react-async-component';

export default asyncComponent({
  resolve: () => System.import('./Post'),
  ssrMode: 'boundary',
  name: 'Post',
});
