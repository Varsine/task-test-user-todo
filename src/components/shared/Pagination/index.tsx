import React, {useState} from 'react';
import PaginationComponent from 'react-js-pagination';

import {PrevIcon, NextIcon} from '~/assets';

import styles from './Pagination.module.scss';

const Pagination: React.FC = () => {
  const [activePage, setActivePage] = useState<number>(1);

  const handleChange = (pageNumber: number) => {
    setActivePage({activePage: pageNumber} as any);
  };
  return (
    <div className={styles.container}>
      <PaginationComponent
        innerClass={styles.container__inner}
        itemClass={styles.container__list}
        activeClass={styles.container_active}
        activeLinkClass={styles.container_active__link}
        linkClass={styles.container__link}
        hideNavigation={true}
        firstPageText={<NextIcon />}
        lastPageText={<PrevIcon />}
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={5}
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
