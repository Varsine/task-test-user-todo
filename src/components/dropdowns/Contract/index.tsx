import React, {useState, useCallback, useRef, useMemo, Fragment} from 'react';
import classNames from 'classnames';

import {Route} from '~/constants';
import {Input, Link} from '~/components';
import {useOnClickOutside} from '~/hooks';

import Typography from '../../shared/Typography';

import styles from './Contract.module.scss';
import {IOption, IContractProps} from './types';

const Contract: React.FC<IContractProps> = ({
  name,
  error,
  clause,
  options,
  disabled,
  label = '',
  defaultValue,
  className = '',
  placeholder = '',
}) => {
  const contractRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const initialContractField = options.find(
    (option) => option.parentId === clause,
  );
  const [contractField, setContractedField] = useState<IOption | undefined>(
    defaultValue || initialContractField,
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
    [styles.container__title_active]: disabled || !!contractField || !!error,
  });

  const handleOptionClick = useCallback((item) => {
    setContractedField(item);
    setExpanded(false);
  }, []);

  const memoizedContractValue = useMemo(
    () => contractField?.title || placeholder,
    [placeholder, contractField?.title],
  );

  const contractOptions = useMemo(
    () =>
      options.map((item) => (
        <Link
          key={item.id}
          to={`${Route.Performance}/${item.parentId}`}
          className={styles.container_expanded__box__item__container}>
          <div
            className={`${styles.container_expanded__box__item} Contract__item`}>
            <Typography
              type="Medium"
              variant="Text"
              onClick={() => handleOptionClick(item)}
              className={styles.container_expanded__box__item_wrapper}>
              {item.title}
              <span> {item.content}</span>
            </Typography>
          </div>
        </Link>
      )),
    [handleOptionClick, options],
  );

  const handleContractClick = () => {
    if (!disabled) {
      setExpanded(!expanded);
    }
  };

  const handleContractOutsideClick = () => {
    if (!disabled && expanded) {
      setExpanded(false);
    }
  };

  useOnClickOutside(contractRef, handleContractOutsideClick);

  const wrapperProps = label
    ? {
        htmlFor: name,
        className: styles.container__label,
      }
    : {};

  return (
    <WrapperComponent {...wrapperProps}>
      {label}
      <div id={name} ref={contractRef} className={styles.container__wrapper}>
        <div
          role="button"
          onClick={handleContractClick}
          className={containerClasses}>
          <div className={styles.container__value}>
            <Typography
              variant="Heading"
              type="Medium"
              className={titleClasses}>
              {memoizedContractValue}
            </Typography>
            {contractField?.content && (
              <Typography
                className={styles.container__content}
                variant="Text"
                type="Small">
                {contractField?.content}
              </Typography>
            )}
          </div>
          <div className={styles.container__tick}>ICON</div>
        </div>

        {expanded && (
          <div className={styles.container_expanded__box}>
            <div>
              <Input
                name="search_Input"
                // RightIcon={BoldSearch}
                placeholder="Search event"
                className={styles.container_expanded__box_input}
                innerClassName={styles.container_expanded__box_inner}
              />
            </div>
            {contractOptions}
          </div>
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

export default Contract;
