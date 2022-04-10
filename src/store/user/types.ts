export type UserInfo = {
  email: string;
  phone: string;
  address: string;
  lastName: string;
  firstName: string;
};

export type UserSliceState = {
  userList: UserInfo[];
  filterUser: UserInfo | null;
};

export type EditUserProps = {
  index: number;
  newValue: UserInfo;
};
