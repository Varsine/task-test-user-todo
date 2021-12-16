import React from 'react';

export type DateInputType =
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

export interface IDateInputProps {
  value?: any;
  name: string;
  label: string;
  error?: string;
  type?: DateInputType;
  className?: string;
  placeholder?: string;
  innerClassName?: string;
  labelClassName?: string;
  onChange?: (event: React.ChangeEvent) => void;
}
