import {ICommonNavigationWithIcon} from '~/types';
import {
  Wallet,
  ClockIcon,
  RoundAllow,
  BalanceIcon,
  SecurityAllow,
  QuadrangleTwoHorizontalLine,
} from '~/assets';

import Route from '../route';

const ContractManagerNavigation: ICommonNavigationWithIcon[] = [
  {
    name: 'Overview',
    route: Route.Overview,
    Icon: QuadrangleTwoHorizontalLine,
  },
  {
    name: 'Negotiation',
    route: Route.Negotiation,
    Icon: BalanceIcon,
  },
  {
    name: 'Performance',
    route: Route.Performance,
    Icon: SecurityAllow,
  },
  {
    name: 'Finance',
    route: Route.Finance,
    Icon: ClockIcon,
  },
  {
    name: 'Claims',
    route: Route.Claims,
    Icon: Wallet,
  },
  {
    name: 'Vault',
    route: Route.Vault,
    Icon: RoundAllow,
  },
  {
    name: 'Analytics',
    route: Route.Analytics,
    Icon: Wallet,
  },
];

export default ContractManagerNavigation;
