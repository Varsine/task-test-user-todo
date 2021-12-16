import React, {useState, useRef, useMemo, Fragment, useCallback} from 'react';
import classNames from 'classnames';

import {useOnClickOutside} from '~/hooks';
import {DownIcon, RightIcon} from '~/assets';
import {Status, Checkbox} from '~/components';
import {StatusType} from '~/components/shared/Status/types';

import Typography from '../../shared/Typography';

import {IFilterProps} from './types';
import styles from './Filter.module.scss';

const Filter: React.FC<IFilterProps> = ({
  name,
  error,
  options,
  disabled,
  className = '',
  wrapperClassName = '',
  placeholder = '',
  label = '',
}) => {
  const filterRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const initialValue = useMemo(
    () =>
      options.reduce((acc: any, curVal: any) => {
        acc[curVal.name] = curVal.subItems.map((subItem: any) => ({
          subName: subItem.name,
          checked: false,
        }));

        return acc;
      }, {}),
    [options],
  );
  const [selectedFilters, setSelectedFilters] = useState<any>(initialValue);

  const WrapperComponent = label ? 'label' : Fragment;
  const containerClasses = classNames(styles.container, {
    [styles.container_error]: !!error,
    [styles.container_expanded]: expanded,
    [styles.container_disabled]: disabled,
    [styles.container_labeled]: !!label,
    [className]: className,
  });

  const titleClasses = classNames(styles.container__title, {
    [styles.container__title_active]: disabled || !!error,
  });

  const wrapperClasses = classNames(styles.container__wrapper, {
    [wrapperClassName]: wrapperClassName,
  });

  const handleCheckboxChange = useCallback(
    (name, subName, checked) => {
      const updatedSelectedFilters = {
        ...selectedFilters,
        [name]: selectedFilters[name]?.map((item: any) => {
          if (item.subName === subName) {
            return {
              ...item,
              checked,
            };
          }

          return item;
        }),
      };

      setSelectedFilters(updatedSelectedFilters);
    },
    [selectedFilters],
  );

  const selectOptions = useMemo(
    () =>
      options.map(({id, name, isTick, shownName, subItems = []}, idx) => {
        const badgeCount = selectedFilters[name].filter(
          (item: any) => item.checked,
        ).length;

        return (
          <div className={styles.container_expanded__inner} key={id}>
            <div
              className={classNames(styles.container_expanded__inner__content, {
                [styles.container_expanded__inner__content_first]: idx === 0,
                [styles.container_expanded__inner__content_last]:
                  idx === options.length - 1,
                [styles.container_expanded__inner__content_nolast]:
                  idx % 2 === 0 || idx % 2 === 1,
              })}>
              <div className={styles.container_expanded__box__block}>
                <Typography
                  type="Medium"
                  variant="Text"
                  className={`${styles.container_expanded__box__item} select__item`}>
                  {shownName}
                </Typography>
                {isTick && !!subItems.length && !!badgeCount && (
                  <div className={styles.container_expanded__box__block_count}>
                    {badgeCount}
                  </div>
                )}
              </div>

              {isTick && !!subItems.length && <RightIcon />}
            </div>

            {!!subItems.length && (
              <div className={styles.container_expanded__inner_sub}>
                {subItems.map((subItem) => (
                  <div
                    className={styles.container_expanded__inner_sub_item}
                    key={subItem.name}>
                    <div
                      className={
                        styles.container_expanded__inner_sub_item_wrapper
                      }>
                      <Checkbox
                        value={
                          selectedFilters[name]?.find(
                            (item: any) => item.subName === subItem.name,
                          )?.checked
                        }
                        name={subItem.name}
                        onChange={(checked) =>
                          handleCheckboxChange(name, subItem.name, checked)
                        }
                      />
                      <Typography
                        className={
                          styles.container_expanded__inner_sub_item_wrapper_status
                        }>
                        {subItem.shownName}
                      </Typography>
                    </div>
                    <div>
                      <Status type={subItem.name as StatusType} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }),
    [handleCheckboxChange, options, selectedFilters],
  );

  const memoizedRotate = useMemo(() => (expanded ? 180 : 0), [expanded]);

  const handleInnerFilterClick = () => {
    if (!disabled) {
      setExpanded(!expanded);
    }
  };

  const handleFilterOutsideClick = () => {
    if (!disabled && expanded) {
      setExpanded(false);
    }
  };

  useOnClickOutside(filterRef, handleFilterOutsideClick);

  const wrapperProps = label
    ? {
        htmlFor: name,
        className: styles.container__label,
      }
    : {};

  return (
    <WrapperComponent {...wrapperProps}>
      {label}
      <div id={name} ref={filterRef} className={wrapperClasses}>
        <div
          role="button"
          className={containerClasses}
          onClick={handleInnerFilterClick}>
          <div className={styles.container__value}>
            <Typography className={titleClasses}>{placeholder}</Typography>
          </div>
          <div className={styles.container__tick}>
            <DownIcon
              style={{
                transform: `rotate(${memoizedRotate}deg)`,
              }}
            />
          </div>
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

export default Filter;
