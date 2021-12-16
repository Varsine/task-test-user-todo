import React from 'react';
import Head from 'next/head';

import {Header} from '~/containers';

import {ISeoProps} from './types';

const Seo: React.FC<ISeoProps> = ({
  title,
  children,
  metaDescription,
  showHeader = true,
}) => (
  <React.Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, user-scalable=no" />
    </Head>
    {showHeader && <Header />} {children}
  </React.Fragment>
);

export default Seo;
