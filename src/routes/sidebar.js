import {
  FiGrid,
  FiShoppingBag,
  // FiUsers,
  // FiUser,
  FiCompass,
  // FiGift,
  FiList,
  // FiSettings,
  // FiSlack,
} from 'react-icons/fi';
/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
 
  {
    path: '/category',
    icon: FiList,
    name: 'Categories',
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
  },
 
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },
  {
    path: '/faq',
    icon: FiCompass,
    name: 'Faq',
  },

   // {
  //   path: '/customers',
  //   icon: FiUsers,
  //   name: 'Customers',
  // },
  
  // {
  //   path: '/coupons',
  //   icon: FiGift,
  //   name: 'Coupons',
  // },
  // {
  //   path: '/our-staff',
  //   icon: FiUser,
  //   name: 'Our Staff',
  // },
  // {
  //   path: '/setting',
  //   icon: FiSettings,
  //   name: 'Setting',
  // },

  // {
  //   icon: FiSlack,
  //   name: 'Pages',
  //   routes: [
  //     // submenu

  //     {
  //       path: '/404',
  //       name: '404',
  //     },
  //     {
  //       path: '/coming-soon',
  //       name: 'Coming Soon',
  //     },
  //   ],
  // },
];

export default sidebar;
