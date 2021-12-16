import React from 'react';

export type CurrencyInputType =
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

export interface ICurrencyInputProps {
  name: string;
  label: string;
  error?: string;
  currencyText: string;
  type?: CurrencyInputType;
  className?: string;
  placeholder?: string;
  labelClassName?: string;
  rightText?: string;
  children?: React.ReactNode;
}
