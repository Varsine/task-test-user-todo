import React, {ReactElement} from 'react';

export type InputType =
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text';

export interface IInputProps {
  name: string;
  type?: InputType;
  label?: string;
  value?: string | number;
  error?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: ReactElement<any, any> | null;
  className?: string;
  wrapperRef?: React.ForwardedRef<HTMLDivElement>;
  placeholder?: string;
  toggleHandle?:
    | React.Dispatch<React.SetStateAction<boolean>>
    | React.MouseEventHandler<SVGSVGElement>;
  innerClassName?: string;
  labelClassName?: string;
}
