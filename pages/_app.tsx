import {Provider} from 'react-redux';
import {AppProps} from 'next/app';

import 'react-toastify/dist/ReactToastify.css';

import '~/styles/index.scss';

import store, {wrapper} from '~/store';
// import {ModalContextProvider, ToastContextProvider} from '~/context';

const SecroApp: React.FC<AppProps> = ({Component, pageProps}) => (
  <Provider store={store}>
    {/* <ModalContextProvider>
      <ToastContextProvider> */}
    <Component {...pageProps} />
    {/* </ToastContextProvider>
    </ModalContextProvider> */}
  </Provider>
);

export default wrapper.withRedux(SecroApp);
