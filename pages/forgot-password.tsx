import {NextPage} from 'next';

import {Seo} from '~/components';
// import {ForgotPassword} from '~/containers';

const ForgotPasswordPage: NextPage = () => (
  <Seo
    showHeader={false}
    title="Sign-in page"
    metaDescription="Sign-in page description">
    {/* <ForgotPassword /> */}
  </Seo>
);

export default ForgotPasswordPage;
