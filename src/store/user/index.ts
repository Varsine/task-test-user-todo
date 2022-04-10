import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {userList} from '~/utils';

import {RootState} from '../../types';

import {reducerName} from './constants';
import {EditUserProps, UserInfo, UserSliceState} from './types';

const internalInitialState: UserSliceState = {
  userList: userList,
  filterUser: null,
};

const userSlice = createSlice({
  name: reducerName,
  initialState: internalInitialState,
  reducers: {
    creatNewUser: (state, action: PayloadAction<UserInfo>) =>
      void state.userList.unshift(action.payload),

    editUser: (state, action: PayloadAction<EditUserProps>) => {
      const {index, newValue} = action.payload;
      const editArray = state.userList.map((el, idx) => {
        if (idx === index) {
          el = newValue;
        }
        return el;
      });

      return {
        ...state,
        userList: editArray,
      };
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      const filtered = state.userList.filter(
        (el, idx) => idx !== action.payload,
      );

      return {
        ...state,
        userList: filtered,
      };
    },
    filteredData: (state, action: PayloadAction<number>) => {
      const filterData = state.userList.filter(
        (el, idx) => idx === action.payload,
      );

      return {
        ...state,
        filterUser: filterData[0],
      };
    },
    reset: () => internalInitialState,
  },
});

const {reducer, actions} = userSlice;

export const userSelect = (state: RootState) => state.user;

export const userActions = {
  ...actions,
};

export default reducer;
