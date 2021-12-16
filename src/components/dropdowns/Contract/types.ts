export type IOption = {
  id: number;
  title: string;
  content: string;
  parentId?: string;
};

export interface IContractProps {
  error?: string;
  name?: string;
  label?: string;
  clause?: string;
  className?: string;
  options: IOption[];
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: IOption;
}
