import React, {forwardRef} from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import {IDateInputProps} from './types';
import styles from './DateInput.module.scss';

const DateInput = forwardRef<any, IDateInputProps>(
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

    const today = new Date();
    const dateInfo = {
      minDay:
        String(today.getDate()).length < 2
          ? '0' + String(today.getDate())
          : String(today.getDate()),
      minMonth:
        String(today.getMonth() + 1).length < 2
          ? '0' + String(today.getMonth() + 1)
          : String(today.getMonth() + 1),
      minYear: String(today.getFullYear()),
    };

    const handleChange = (event: React.ChangeEvent<any>) => {
      const replacedValue = event.target.value.replace(/[^0-9]/g, '') || '';
      let day =
        Number(replacedValue.slice(0, 2)) > 31 ? 31 : replacedValue.slice(0, 2);
      let month =
        Number(replacedValue.slice(2, 4)) > 12 ? 12 : replacedValue.slice(2, 4);
      let year = replacedValue.slice(4, 8);

      if (year.length > 3 && year < dateInfo.minYear) {
        year = dateInfo.minYear;
      }

      if (year.length > 3 && month.length > 1 && month < dateInfo.minMonth) {
        month = dateInfo.minMonth;
      }

      if (
        year.length > 3 &&
        month.length > 1 &&
        day.length > 1 &&
        ((Number(month) < Number(dateInfo.minMonth) &&
          Number(day) < Number(dateInfo.minDay)) ||
          day === '00')
      ) {
        day = dateInfo.minDay;
      }

      const timeValue = year
        ? day + '.' + month + '.' + year
        : month
        ? day + '.' + month
        : day;

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

export default DateInput;
