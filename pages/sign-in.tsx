import {NextPage} from 'next';

import {Seo} from '~/components';
// import {SignIn} from '~/containers';

const SignInPage: NextPage = () => (
  <Seo
    showHeader={false}
    title="Sign-in page"
    metaDescription="Sign-in page description">
    {/* <SignIn /> */}
  </Seo>
);

export default SignInPage;
