import React, {useRef, useState, useEffect} from 'react';
import classNames from 'classnames';

import {SearchIcon} from '~/assets';
import {useOnClickOutside} from '~/hooks';

import Input from '../Input';

import {SearchProps} from './types';
import styles from './Search.module.scss';

const Search: React.FC<SearchProps> = ({
  expanded,
  setExpanded,
  filterSearch,
}) => {
  const filterRef = useRef<HTMLDivElement | null>(null);
  const [searchValue, setSearchValue] = useState<string>('');

  const labelClassName = classNames(styles.wrapper, {
    [styles.wrapper_expanded]: expanded,
  });

  const inputClasses = classNames(styles.wrapper__container__search, {
    [styles.wrapper__container__search_expanded]: expanded,
  });

  useOnClickOutside(filterRef, () => setExpanded(false));

  const searchChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchValue(value);
    filterSearch(value);
  };

  const toggleExpanded = () => setExpanded(!expanded);

  useEffect(() => {
    setSearchValue('');
  }, [expanded]);

  const searchIcon = (
    <SearchIcon className={styles.wrapper__icon} onClick={toggleExpanded} />
  );

  return (
    <Input
      type="text"
      name="globalSearch"
      value={searchValue}
      onChange={(e) => searchChangeHandle(e)}
      className={inputClasses}
      rightIcon={searchIcon}
      wrapperRef={filterRef}
      placeholder="Search"
      labelClassName={labelClassName}
      innerClassName={styles.wrapper__container}
    />
  );
};

export default Search;
