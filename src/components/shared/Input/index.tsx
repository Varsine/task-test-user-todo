import React, {forwardRef} from 'react';
import classNames from 'classnames';

import {IInputProps} from './types';
import styles from './Input.module.scss';

const Input = forwardRef<any, IInputProps>(
  (
    {
      type = 'text',
      name,
      label,
      error,
      onChange,
      disabled,
      className = '',
      rightIcon,
      wrapperRef,
      placeholder,
      innerClassName = '',
      labelClassName = '',
      ...rest
    },
    ref,
  ) => {
    const labelClasses = classNames(styles.container__label, labelClassName);

    const inputClasses = classNames(styles.container, className, {
      [styles.container__error]: !!error,
      [styles.container_with_icon]: !!rightIcon,
    });

    const inputInnerClasses = classNames(
      styles.container__inner,
      innerClassName,
      {
        [styles.container__inner__error]: !!error,
        [styles.container__inner_disabled]: disabled,
      },
    );

    return (
      <label htmlFor={name} className={labelClasses}>
        {label}
        <div ref={wrapperRef} className={inputInnerClasses}>
          <input
            {...rest}
            id={name}
            ref={ref}
            name={name}
            type={type}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            placeholder={placeholder}
            autoComplete="off"
          />
          {rightIcon && rightIcon}
        </div>
        {error && <p className={styles.container__error__text}>{error}</p>}
      </label>
    );
  },
);

export default Input;
