import React, {useMemo, useRef} from 'react';
import Image from 'next/image';
import Router from 'next/router';
import usePortal from 'react-useportal';

import {useOnClickOutside} from '~/hooks';
import {Typography, Link} from '~/components';
import {LogoutIcon, DownIcon, OvalImage} from '~/assets';
import {Route, UserProfileMenuNavigation} from '~/constants';

import {IHeaderUserProps} from './types';
import styles from './HeaderUser.module.scss';

const HeaderUser: React.FC<IHeaderUserProps> = () => {
  const userRef = useRef(null);
  const {openPortal, closePortal, isOpen, Portal} = usePortal();

  useOnClickOutside(userRef, closePortal, true);

  const userProfileMenuNavigation = useMemo(
    () =>
      UserProfileMenuNavigation.map(({name, route}) => (
        <Link to={route} key={route} className="text_regular">
          <span>{name}</span>
        </Link>
      )),
    [],
  );

  const handleLogoutClick = () => {
    Router.push(Route.SignIn);
  };

  return (
    <React.Fragment>
      <div
        role="button"
        ref={userRef}
        data-dropdown="true"
        className={styles.user}
        onClick={!isOpen ? openPortal : closePortal}>
        <Image
          width={44}
          src={OvalImage}
          height={44}
          alt="Secro"
          className={styles.user__image}
        />
        <DownIcon
          className={styles.user__arrow}
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        />
      </div>
      {isOpen && (
        <Portal>
          <div className={styles.box}>
            <div className={styles.box__content}>
              <div className={styles.box__content__header}>
                <div>
                  <h1 className={styles.box__content__header__name}>
                    Jeremy Clarkson
                  </h1>
                  <Typography
                    variant="Heading"
                    type="Medium"
                    className={styles.box__content__header__validator}>
                    Validator
                  </Typography>
                </div>
                <div
                  role="button"
                  onClick={handleLogoutClick}
                  className={styles.box__content__header__logout}>
                  <LogoutIcon />
                </div>
              </div>
            </div>
            <div className={styles.box__navigation}>
              {userProfileMenuNavigation}
            </div>
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default HeaderUser;
