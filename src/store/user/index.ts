import {createSlice} from '@reduxjs/toolkit';

import {RootState} from '../../types';

import {reducerName} from './constants';
import {UserSliceState} from './types';

const internalInitialState: UserSliceState = {
  userInfo: null,
};

const userSlice = createSlice({
  name: reducerName,
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
  },
});

const {reducer, actions} = userSlice;

export const userSelect = (state: RootState) => state.user;

export const userActions = {
  ...actions,
};

export default reducer;
