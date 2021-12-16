import {IGroup, IGroupItem} from '~/types/dropdowns';

export interface IEventGroupProps {
  groups: IGroup[];
}

export interface IGroupItemProps extends IGroupItem {
  index: number;
}
