import {Provider} from 'react-redux';
import {AppProps} from 'next/app';

import '~/styles/index.scss';

import store, {wrapper} from '~/store';

const PornApp: React.FC<AppProps> = ({Component, pageProps}) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default wrapper.withRedux(PornApp);
