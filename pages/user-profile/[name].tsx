import React from 'react';
import Head from 'next/head';
import {NextPage} from 'next';

import {UserProfileContainer} from '~/containers';
import {userActions} from '~/store/user';
import {wrapper} from '~/store';

const UserProfile: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>User Form</title>
      <meta name="description" content="User User Form description" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <UserProfileContainer />
  </React.Fragment>
);

UserProfile.getInitialProps = wrapper.getInitialPageProps(
  ({dispatch}) =>
    async ({query}) => {
      const currentName = query.name?.slice(-1);
      const currentIndex = Number(currentName) - 1;

      await dispatch(userActions.filteredData(currentIndex));
    },
);

export default UserProfile;
