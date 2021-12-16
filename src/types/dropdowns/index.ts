import {Type} from '~/components/shared/Type/types';
import {StatusType} from '~/components/shared/Status/types';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export interface IGroupItem {
  id: string;
  type: Type;
  date: string;
  hour: string;
  title: string;
  userID: number;
  userName: string;
  status: StatusType;
  image: StaticImageData;
}

export interface IGroup {
  id: number;
  groupName: string;
  groupItems: IGroupItem[];
}
