import {NextPage} from 'next';

import {Pagination} from '~/components';
import {Seo} from '~/components';

const NegotiationPage: NextPage = () => (
  <Seo title="Negotiation page" metaDescription="Negotiation page description">
    <Pagination />
  </Seo>
);

export default NegotiationPage;
