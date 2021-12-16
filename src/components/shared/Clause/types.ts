import {IEventText} from '~/constants/texts/types';

export interface IClauseProps {
  clause?: string;
}

export interface IPerClauseProps extends Omit<IEventText, 'id'> {
  isActive: boolean;
  onClauseClick: () => void;
}
