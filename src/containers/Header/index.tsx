import React from 'react';

import {HeartLikes, SearchIcon, LikIt} from '~/assets';

import Input from '../../components/shared/Input/index';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className={`${styles.wrapper_content} container`}>
        <HeartLikes />
        <nav className={styles.wrapper_content_menu}>
          <p>Home</p>
          <p>Categories</p>
          <p>Top Rated</p>
          <p>Most Liked</p>
          <p>New</p>
        </nav>
        <div className={styles.wrapper_content_other}>
          <Input
            type="text"
            name="Global search"
            placeholder="Search"
            RightIcon={SearchIcon}
            className={styles.wrapper_content_other__search}
          />
          <LikIt className={styles.wrapper_content_other_language} />
        </div>
      </div>
    </header>
  );
};

export default Header;
