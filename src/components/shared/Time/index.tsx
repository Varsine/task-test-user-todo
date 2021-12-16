import React, {forwardRef} from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import {ITimeProps} from './types';
import styles from './Time.module.scss';

const Time = forwardRef<any, ITimeProps>(
  (
    {
      name,
      label,
      error,
      placeholder,
      type = 'text',
      className = '',
      innerClassName = '',
      labelClassName = '',
      ...rest
    },
    ref,
  ) => {
    const inputClasses = classNames(styles.container, {
      [className]: className,
      [styles.container__error]: !!error,
    });

    const inputInnerClasses = classNames(styles.container__inner, {
      [innerClassName]: innerClassName,
      [styles.container__inner__error]: !!error,
    });

    const labelClasses = classNames(styles.container__label, {
      [labelClassName]: labelClassName,
    });

    const handleChange = (event: React.ChangeEvent<any>) => {
      const replacedValue = event.target.value.replace(/[^0-9]/g, '') || '';
      const hour =
        Number(replacedValue.slice(0, 2)) > 23 ? 23 : replacedValue.slice(0, 2);
      const minute =
        Number(replacedValue.slice(2, 4)) > 59 ? 59 : replacedValue.slice(2, 4);
      const timeValue = replacedValue.length > 2 ? hour + ':' + minute : hour;

      event.target.value = timeValue;
      rest.onChange?.(event);
    };

    return (
      <label htmlFor={name} className={labelClasses}>
        {label}
        <div className={inputInnerClasses}>
          <input
            {...rest}
            id={name}
            ref={ref}
            name={name}
            type={type}
            autoComplete="off"
            onChange={handleChange}
            className={inputClasses}
            placeholder={placeholder}
          />
        </div>
        {error && (
          <Typography type="Small" className={styles.container__error__text}>
            {error}
          </Typography>
        )}
      </label>
    );
  },
);

export default Time;
