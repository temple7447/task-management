
// ----------------------------------------------------------------------

import dashboard from "../../assets/svg/dashboard.svg"
import branches from "../../assets/svg/branches.svg"
import project from "../../assets/svg/project.svg"
import users from "../../assets/svg/users.svg"
import analytics from "../../assets/svg/analytics.svg"
import setting from "../../assets/svg/setting.svg"


import SvgColor from "../../components/svg-color";


const icon = (name) => {
  return (
    <SvgColor src={`../../assets/svg/${name}.svg`} sx={{ width: "18px", height: "18px" }} />
  );
}


export const navConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: dashboard,
  },
  {
    title: 'My tasks',
    path: '/mytask',
    icon: branches,
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: project,
  },
  {
    title: 'Analytics',
    path: '/users',
    icon: users,
  },



  // {
  //   title: 'product',
  //   path: '/products',
  //   icon: icon('ic_cart'),
  // },
  // {
  //   title: 'blog',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];


export const navConfigNext = [
  {
    title: 'Settings',
    path: '/settings',
    icon: setting,
  },

  {
    title: 'Log out',
    path: '/log-out',
    icon: setting,
  },

];



export const userNavconfig = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: dashboard,
  },
  {
    title: 'Branches',
    path: '/branches',
    icon: branches,
  },
]
