import {useEffect} from 'react';

import {useAppRequest} from '~/hooks';
import {RouterService} from '~/services';

import endpoints from '../endpoints';

import {IUseUsersReturn} from './types';

const useUsers = (): IUseUsersReturn => {
  const {data, mutate, error} = useAppRequest({
    url: endpoints.AuthService.getUsers(),
  });

  useEffect(() => {
    if (error) {
      RouterService.pushError();
    }
  }, [error]);

  return {
    isError: !!error,
    users: data || [],
    mutateUsers: mutate,
    isLoading: !error && !data,
  };
};

const AuthService = {
  useUsers,
};

export default AuthService;
