import React from 'react';
import {NextPage} from 'next';

import {Seo, Typography} from '~/components';

const HomePage: NextPage = () => {
  return (
    <Seo title="Home page" metaDescription="Home page description">
      <Typography tagName="div" align="right" variant="Text">
        CATEGORY
      </Typography>
    </Seo>
  );
};

export default HomePage;
