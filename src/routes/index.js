import Following from '~/pages/Following/Following';
import Home from '~/pages/Home/Home';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
];

//only Login to use this routes
const privateRoutes = [];
export { privateRoutes, publicRoutes };
