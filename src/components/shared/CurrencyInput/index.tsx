import React from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import {ICurrencyInputProps} from './types';
import styles from './CurrencyInput.module.scss';

const CurrencyInput: React.FC<ICurrencyInputProps> = (
  {
    name,
    label,
    error,
    rightText,
    placeholder,
    currencyText = 'USD',
    type = 'text',
    className = '',
    labelClassName = '',
  },
  ...rest
) => {
  const inputClasses = classNames(styles.container, {
    [className]: className,
    [styles.container__error]: !!error,
    [styles.container_with_text]: !!rightText,
  });

  const inputInnerClasses = classNames(styles.container__inner, {
    [className]: className,
    [styles.container__inner__error]: !!error,
  });

  const labelClasses = classNames(styles.container__label, {
    [labelClassName]: labelClassName,
  });

  return (
    <label htmlFor={name} className={labelClasses}>
      {label}
      <div className={inputInnerClasses}>
        <input
          {...rest}
          id={name}
          name={name}
          className={inputClasses}
          placeholder={placeholder}
          type={type}
        />

        {!rightText && (
          <p className={styles.container__right_text}>{currencyText}</p>
        )}
      </div>
      {error && (
        <Typography type="Small" className={styles.container__error__text}>
          {error}
        </Typography>
      )}
    </label>
  );
};

export default CurrencyInput;
