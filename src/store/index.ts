import {configureStore} from '@reduxjs/toolkit';
import {createWrapper, MakeStore} from 'next-redux-wrapper';

import * as reducers from './reducers';

const store = configureStore({
  reducer: {
    ...reducers,
  },
});

const makeStore: MakeStore<typeof store> = () => store;

export const wrapper = createWrapper(makeStore);

export default store;
