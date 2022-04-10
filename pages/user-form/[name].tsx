import React from 'react';
import Head from 'next/head';
import {NextPage} from 'next';

import {UserFormContainer} from '~/containers';
import {userActions} from '~/store/user';
import {wrapper} from '~/store';

const UserForm: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>User Form</title>
      <meta name="description" content="User User Form description" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <UserFormContainer />
  </React.Fragment>
);

UserForm.getInitialProps = wrapper.getInitialPageProps(
  ({dispatch}) =>
    async ({query}) => {
      if (query.name !== 'create') {
        const currentName = query.name?.slice(-1);
        const currentIndex = Number(currentName) - 1;

        await dispatch(userActions.filteredData(currentIndex));
      }
    },
);

export default UserForm;
