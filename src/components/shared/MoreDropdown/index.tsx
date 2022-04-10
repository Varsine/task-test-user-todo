import React, {useRef, useState} from 'react';

import {Route} from '~/constants';
import {userActions} from '~/store/user';
import {Delete, EditPenIcon, More} from '~/assets';
import {useAppDispatch, useOnClickOutside} from '~/hooks';

import Link from '../Link';

import {MoreDropDownProps} from './types';
import styles from './MoreDropdown.module.scss';

const MoreDropdown: React.FC<MoreDropDownProps> = ({idx, name}) => {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenDropdown = () => setIsOpen(!isOpen);

  const deleteUser = () => {
    dispatch(userActions.deleteUser(idx));
    setIsOpen(false);
  };

  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <More
        onClick={handleOpenDropdown}
        className={styles.wrapper__more_icon}
      />
      {isOpen && (
        <div className={styles.wrapper__content}>
          <Link to={`${Route.UserForm}/${name}-${idx + 1}`}>
            <EditPenIcon className={styles.wrapper__content__icon} />
          </Link>
          <Delete
            onClick={deleteUser}
            className={styles.wrapper__content__icon}
          />
        </div>
      )}
    </div>
  );
};

export default MoreDropdown;
