import {ICommonNavigationItem} from '~/types';

import Route from '../route';

const UserProfileMenuNavigation: ICommonNavigationItem[] = [
  {
    name: 'Profile',
    route: Route.Profile,
  },
  {
    name: 'Settings',
    route: Route.Settings,
  },
  {
    name: 'Help & Support',
    route: Route.HelpSupport,
  },
];

export default UserProfileMenuNavigation;
