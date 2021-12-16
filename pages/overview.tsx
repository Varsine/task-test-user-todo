import {NextPage} from 'next';

import {Seo} from '~/components';

const OverviewPage: NextPage = () => (
  <Seo title="Overview page" metaDescription="Overview page description">
    <div className="container">OverviewPage</div>
  </Seo>
);

export default OverviewPage;
