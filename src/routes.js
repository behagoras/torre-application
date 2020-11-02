import Dashboard from './pages/Dashboard'
import Dribbble from './pages/Dribbble'
import Home from './pages/Home'

const routes = [
  {
    layout: '/',
    path: '/',
    title: 'Home',
    component: Home,
    exact: true,
  },
  {
    layout: '/dashboard',
    path: '/',
    title: 'Home',
    component: Dashboard,
    exact: true,
  },
  {
    layout: '/dashboard',
    path: '/:username',
    title: 'Home',
    component: Dashboard,
    exact: true,
  },
  {
    layout: '/dribbble',
    path: '/',
    title: 'Dribbble',
    component: Dribbble,
    exact: true,
  },
]

export default routes
