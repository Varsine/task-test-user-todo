import React, {useState, useMemo, useRef} from 'react';
import Image from 'next/image';

import {userSelect} from '~/constants';
import {useOnClickOutside} from '~/hooks';
import {DownIcon, OvalImage} from '~/assets';

import Button from '../Button';
import Typography from '../Typography';

import {IUserProps} from './types';
import styles from './User.module.scss';

const User: React.FC<IUserProps> = ({name, position, isExpanded = false}) => {
  const userRef = useRef(null);

  const [expanded, setIsExpanded] = useState(false);
  const [selectField, setSelectField] = useState('Viewer');

  const memoizedRotate = useMemo(() => (expanded ? 180 : 0), [expanded]);

  const handleClick = () => {
    setIsExpanded(!expanded);
  };

  const handleSelector = (shownName: any) => {
    setSelectField(shownName);
  };

  const handleRefOutsideClick = () => {
    setIsExpanded(false);
  };

  useOnClickOutside(userRef, handleRefOutsideClick);

  const options = useMemo(
    () =>
      userSelect.map(({shownName, id}) => (
        <div
          key={id}
          onClick={() => {
            handleSelector(shownName);
          }}
          className={styles.container__right__expanded__content__items}>
          {shownName}
        </div>
      )),
    [],
  );

  return (
    <div className={styles.container__wrapper}>
      <div className={styles.container}>
        <div className={styles.container__image}>
          <Image src={OvalImage} alt="user" />
        </div>
        <div className={styles.container__box}>
          <Typography
            className={styles.container__box__name}
            variant="Text"
            type="Medium">
            {name}
          </Typography>
          <Typography
            className={styles.container__box__position}
            variant="Text"
            type="Small">
            {position}
          </Typography>
        </div>
      </div>
      {isExpanded && (
        <div
          ref={userRef}
          role="button"
          onClick={handleClick}
          className={styles.container__right}>
          <Button className={styles.container__right__button} variant="ghost">
            {selectField}
          </Button>
          <span>
            <DownIcon
              style={{
                transform: `rotate(${memoizedRotate}deg)`,
              }}
            />
          </span>

          {expanded && (
            <div className={styles.container__right__expanded}>
              <div
                role="button"
                className={styles.container__right__expanded__content}>
                {options}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
