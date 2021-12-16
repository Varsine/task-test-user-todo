export type IOption = {
  id: number;
  name: string;
  isTick?: boolean;
  shownName: string;
  subItems?: IOption[];
};

export interface IFilterProps {
  name?: string;
  label?: string;
  error?: string;
  options: IOption[];
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  wrapperClassName?: string;
}
