export type IOption = {
  id: number;
  name: string;
  shownName: string;
};

export interface ISelectProps {
  error?: string;
  name?: string;
  label?: string;
  className?: string;
  options: IOption[];
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: IOption;
}
