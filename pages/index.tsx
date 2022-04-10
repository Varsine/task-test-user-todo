import React from 'react';
import Head from 'next/head';
import {NextPage} from 'next';

import Dashboard from '~/containers/Dashboard';

const HomePage: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="User dashboard description" />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    <Dashboard />
  </React.Fragment>
);

export default HomePage;
