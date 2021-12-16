import {ICommonRequestReturn, MutateData} from '~/types';

export interface IUseUsersReturn extends ICommonRequestReturn {
  users: any;
  mutateUsers: MutateData;
}
