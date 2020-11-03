import Dashboard from './pages/Dashboard'
import Dribbble from './pages/Dribbble'
import RecommendedJobs from './pages/RecommendedJobs'

const routes = [
  {
    layout: '/',
    path: '/',
    title: 'Home',
    component: Dashboard,
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
  {
    layout: '/recommended',
    path: '/',
    title: 'Recommended Opportunities',
    component: RecommendedJobs,
    exact: true,
  },
]

export default routes
