import React from 'react';

export type TimeInputType =
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

export interface ITimeProps {
  value?: any;
  name: string;
  label: string;
  error?: string;
  type?: TimeInputType;
  className?: string;
  placeholder?: string;
  innerClassName?: string;
  labelClassName?: string;
  onChange?: (event: React.ChangeEvent) => void;
}
