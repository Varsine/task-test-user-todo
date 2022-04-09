export type UserInfo = {
  id: string;
  email: string;
  address: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
};

export type UserSliceState = {
  userInfo: UserInfo | null;
};
