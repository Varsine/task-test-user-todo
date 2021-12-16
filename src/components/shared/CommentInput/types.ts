import React from 'react';

export interface ISelectedFile extends File {
  id: string;
}

export type TextAreaType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export interface ICommentInputProps {
  value?: any;
  name: string;
  label?: string;
  error?: string;
  type?: TextAreaType;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  innerClassName?: string;
  labelClassName?: string;
  onChange?: (event: React.ChangeEvent) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
}
