import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

import {Route} from '~/constants';
import {Link, Search, Table} from '~/components';
import {userSelect} from '~/store/user';
import {useAppSelector} from '~/hooks';

import {UserDataProps} from './types';
import styles from './Dashboard.module.scss';

const Dashboard: React.FC = () => {
  const {userList} = useAppSelector(userSelect);

  const [data, setData] = useState<UserDataProps[]>(userList);
  const [expanded, setExpanded] = useState<boolean>(false);

  const linkClasses = classNames(styles.wrapper__link, {
    [styles.wrapper__link_hidden]: expanded,
  });

  const filterData = (value: string) => {
    const loverCaseValue = value.toLowerCase().trim();
    const filteredData = userList.filter((item: UserDataProps | any) =>
      Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(loverCaseValue),
      ),
    );
    return !loverCaseValue ? setData(userList) : setData(filteredData);
  };

  useEffect(() => {
    setData(userList);
  }, [userList]);

  return (
    <div className={`${styles.wrapper} container`}>
      <header className={styles.wrapper__header}>
        <Link to={`${Route.UserForm}/create`} className={linkClasses}>
          Create New User
        </Link>
        <Search
          filterSearch={filterData}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </header>
      <section className={styles.wrapper__content}>
        <div className={styles.wrapper__content__inner}>
          {data.length ? (
            <Table data={data} />
          ) : (
            <p className={styles.wrapper__no_result}>No user found</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
