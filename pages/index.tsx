import {NextPage} from 'next';

import {Seo} from '~/components';

const HomePage: NextPage = () => (
  <Seo title="Home page" metaDescription="Home page description">
    <h1>HomePage</h1>
  </Seo>
);

export default HomePage;
