import React from 'react';

import {Route} from '~/constants';
import {tableTitleList} from '~/utils/userList';

import Link from '../Link';
import MoreDropdown from '../MoreDropdown';

import {TableProps} from './types';
import styles from './Table.module.scss';

const Table: React.FC<TableProps> = ({data}) => {
  const renderTableTitles = tableTitleList.map((el, idx) => (
    <th key={idx} className={styles.wrapper__title}>
      {el}
    </th>
  ));

  const renderTableBody = data.map(
    ({lastName, firstName, email, address, phone}, idx) => (
      <tr key={idx}>
        <td>
          <Link to={`${Route.UserProfile}/${firstName}-${idx + 1}`}>
            {firstName} {lastName}
          </Link>
        </td>
        <td>{address}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <MoreDropdown idx={idx} name={firstName} />
        </td>
      </tr>
    ),
  );

  return (
    <table className={styles.wrapper}>
      <thead>
        <tr>{renderTableTitles}</tr>
      </thead>
      <tbody>{renderTableBody}</tbody>
    </table>
  );
};

export default Table;
