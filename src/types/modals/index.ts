import {Type} from '~/components/shared/Type/types';
import {StatusType} from '~/components/shared/Status/types';

export interface IAddEventModalType {
  id: number;
  type: Type;
  title: string;
  checked: boolean;
  status: StatusType;
  description: string;
}

export interface IInternalUserType {
  id: number;
  name: string;
  position: string;
}
