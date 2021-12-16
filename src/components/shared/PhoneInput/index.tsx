import React, {forwardRef, useRef, useState, useMemo} from 'react';
import classNames from 'classnames';

import {useOnClickOutside} from '~/hooks';
import {UkraineIcon, DownIcon, BoldSearch} from '~/assets';
import {phoneInputCountries} from '~/constants';

import Input from '../Input';
import Typography from '../Typography';

import {IPhoneInputProps} from './types';
import styles from './PhoneInput.module.scss';

const PhoneInput = forwardRef<any, IPhoneInputProps>(
  (
    {
      name,
      label,
      error,
      RightIcon,
      placeholder,
      className = '',
      labelClassName = '',
      ...rest
    },
    ref,
  ) => {
    const phoneRef = useRef(null);
    const [expanded, setExpanded] = useState(false);

    const inputClasses = classNames(styles.wrapper__container, {
      [className]: className,
      [styles.wrapper__container__error]: !!error,
      [styles.wrapper__container_with_icon]: !!RightIcon,
    });
    const inputInnerClasses = classNames(styles.wrapper__container__inner, {
      [className]: className,
      [styles.wrapper__container__inner__error]: !!error,
    });
    const labelClasses = classNames(styles.wrapper__container__label, {
      [labelClassName]: labelClassName,
    });

    const handleClick = () => {
      setExpanded(!expanded);
    };

    useOnClickOutside(phoneRef, (e: any) => {
      if (e.target.getAttribute('data-dropdown') !== 'true') {
        handleClick();
      }
    });

    const countries = useMemo(
      () =>
        phoneInputCountries.map(({name, CountryIcon, number}) => (
          <div key={number} className={styles.wrapper__search_content_items}>
            <div className={styles.wrapper__search_content_items_flag}>
              <CountryIcon />
            </div>
            <div className={styles.wrapper__search_content_items_country}>
              {name}
            </div>
            <div className={styles.wrapper__search_content_items_number}>
              {number}
            </div>
          </div>
        )),
      [],
    );

    return (
      <div className={styles.wrapper}>
        <label htmlFor={name} className={labelClasses}>
          {label}
          <div className={inputInnerClasses}>
            <input
              {...rest}
              id={name}
              ref={ref}
              name={name}
              type="tel"
              autoComplete="off"
              data-dropdown="true"
              className={inputClasses}
              placeholder={placeholder}
            />
            <div className={styles.wrapper__box} onClick={handleClick}>
              <div>
                <UkraineIcon />
              </div>
              <div>
                <DownIcon />
              </div>
            </div>
          </div>
          {error && (
            <Typography
              type="Small"
              className={styles.wrapper__container__error__text}>
              {error}
            </Typography>
          )}
        </label>
        {expanded && (
          <div ref={phoneRef} className={styles.wrapper__search}>
            <div className={styles.wrapper__search_input}>
              <Input
                name="search_Input"
                RightIcon={BoldSearch}
                placeholder="Search event"
                className={styles.wrapper__search_input_container}
              />
            </div>
            <div className={styles.wrapper__search_content}>{countries}</div>
          </div>
        )}
      </div>
    );
  },
);

export default PhoneInput;
