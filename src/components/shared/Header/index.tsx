import React from 'react';

import {Logo, SearchIcon, LikIt} from '~/assets';

import Input from '../Input';
import Link from '../Link';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <div className={`${styles.wrapper_content} container`}>
        <Link to="/">
          <Logo />
        </Link>
        <nav className={styles.wrapper_content_menu}>
          <Link className={styles.wrapper_content_menu_page} to="categories">
            Categories
          </Link>
          <Link className={styles.wrapper_content_menu_page} to="favorites">
            Top Rated
          </Link>
          <Link className={styles.wrapper_content_menu_page} to="most-liked">
            Most Liked
          </Link>
          <Link className={styles.wrapper_content_menu_page} to="new">
            New
          </Link>
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
