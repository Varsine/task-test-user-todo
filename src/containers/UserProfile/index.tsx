import React from 'react';

import {Link} from '~/components';
import {Route} from '~/constants';
import {UserInfo} from '~/store/user/types';
import {userSelect} from '~/store/user';
import {useAppSelector} from '~/hooks';

import styles from './UserProfile.module.scss';

const UserProfile: React.FC = () => {
  const {filterUser} = useAppSelector(userSelect);
  const {firstName, lastName, email, phone, address} = filterUser as UserInfo;

  return (
    <section className={styles.wrapper}>
      <Link to={Route.Home} className={styles.wrapper__back_link}>
        Back
      </Link>
      <h2 className={styles.wrapper__title}>{firstName}</h2>
      <div className={styles.wrapper__content}>
        <h3 className={styles.wrapper__content__sub_title}>User Info</h3>
        <div className={styles.wrapper__block}>
          <p className={styles.wrapper__text}>Full Name: </p>
          <p className={styles.wrapper__sub_text}>
            {firstName} {lastName}
          </p>
        </div>
        <div className={styles.wrapper__block}>
          <p className={styles.wrapper__text}>Email: </p>
          <p className={styles.wrapper__sub_text}>{email}</p>
        </div>
        <div className={styles.wrapper__block}>
          <p className={styles.wrapper__text}>Address: </p>
          <p className={styles.wrapper__sub_text}>{address}</p>
        </div>
        <div className={styles.wrapper__block}>
          <p className={styles.wrapper__text}>Phone: </p>
          <p className={styles.wrapper__sub_text}>{phone}</p>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
