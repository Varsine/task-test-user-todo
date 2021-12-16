import React, {useState, useRef, useMemo, Fragment} from 'react';
import classNames from 'classnames';

import {DownIcon} from '~/assets';
import {useOnClickOutside} from '~/hooks';

import Typography from '../../shared/Typography';

import styles from './Select.module.scss';
import {IOption, ISelectProps} from './types';

const Select: React.FC<ISelectProps> = ({
  name,
  error,
  options,
  disabled,
  label = '',
  defaultValue,
  className = '',
  placeholder = '',
}) => {
  const selectRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [selectedField, setSelectedField] = useState<IOption | undefined>(
    defaultValue,
  );

  const WrapperComponent = label ? 'label' : Fragment;
  const containerClasses = classNames(styles.container, {
    [styles.container_error]: !!error,
    [styles.container_expanded]: expanded,
    [styles.container_disabled]: disabled,
    [styles.container_labeled]: !!label,
    [className]: className,
  });
  const titleClasses = classNames(styles.container__title, {
    [styles.container__title_active]: disabled || !!selectedField || !!error,
  });

  const memoizedSelectValue = useMemo(
    () => selectedField?.shownName || placeholder,
    [placeholder, selectedField?.shownName],
  );

  const selectOptions = useMemo(
    () =>
      options.map((item) => (
        <Typography
          key={item.id}
          type="Medium"
          variant="Text"
          onClick={() => setSelectedField(item)}
          className={`${styles.container_expanded__box__item} select__item`}>
          {item.shownName}
        </Typography>
      )),
    [options],
  );

  const memoizedRotate = useMemo(() => (expanded ? 180 : 0), [expanded]);

  const handleSelectClick = () => {
    if (!disabled) {
      setExpanded(!expanded);
    }
  };

  const handleSelectOutsideClick = () => {
    if (!disabled && expanded) {
      setExpanded(false);
    }
  };

  useOnClickOutside(selectRef, handleSelectOutsideClick);

  const wrapperProps = label
    ? {
        htmlFor: name,
        onClick: handleSelectClick,
        className: styles.container__label,
      }
    : {};

  return (
    <WrapperComponent {...wrapperProps}>
      {label}
      <div
        id={name}
        ref={selectRef}
        data-dropdown="true"
        onClick={handleSelectClick}
        className={containerClasses}>
        <div className={styles.container__value}>
          <Typography className={titleClasses}>
            {memoizedSelectValue}
          </Typography>
        </div>
        <div className={styles.container__tick}>
          <DownIcon
            style={{
              transform: `rotate(${memoizedRotate}deg)`,
            }}
          />
        </div>

        {expanded && (
          <div className={styles.container_expanded__box}>{selectOptions}</div>
        )}
      </div>
      {error && !expanded && (
        <Typography type="Small" className={styles.container__error}>
          {error}
        </Typography>
      )}
    </WrapperComponent>
  );
};

export default Select;
