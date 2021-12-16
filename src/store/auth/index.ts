import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import * as authThunks from './thunks';
import {reducerName, AuthStates} from './constants';
import {AuthSliceState, UpdateAccessTokenAction} from './types';

const internalInitialState: AuthSliceState = {
  error: null,
  accessToken: '',
  loading: AuthStates.IDLE,
};

const authSlice = createSlice({
  name: reducerName,
  initialState: internalInitialState,
  reducers: {
    updateAccessToken(state, action: PayloadAction<UpdateAccessTokenAction>) {
      state.accessToken = action.payload.token;
    },
    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(authThunks.login.pending, (state) => {
      state.loading = AuthStates.LOADING;
    });
    builder.addCase(authThunks.login.fulfilled, (state, action) => {
      state.error = null;
      state.accessToken = action.payload.accessToken;
      state.loading = AuthStates.IDLE;
    });
    builder.addCase(authThunks.login.rejected, (state, action) => {
      state.loading = AuthStates.IDLE;
      state.error = action.error;
    });

    builder.addCase(authThunks.logout.pending, (state) => {
      state.loading = AuthStates.LOADING;
    });
    builder.addCase(authThunks.logout.fulfilled, () => internalInitialState);

    builder.addCase(authThunks.register.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.loading = AuthStates.IDLE;
    });
    builder.addCase(authThunks.register.rejected, (state, action) => {
      state.error = action.error;
    });
  },
});

const {reducer, actions} = authSlice;

export const authActions = {
  ...actions,
  ...authThunks,
};

export default reducer;
