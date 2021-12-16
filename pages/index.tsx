import React from 'react';
import {NextPage} from 'next';

import {Seo} from '~/components';

const HomePage: NextPage = () => {
  return (
    <Seo title="Home page" metaDescription="Home page description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus
      accusantium quibusdam consequuntur recusandae soluta amet nostrum non,
      incidunt accusamus commodi tenetur in animi dolorum dolores. Deserunt esse
      nulla unde!
    </Seo>
  );
};

export default HomePage;
