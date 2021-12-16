import {useMemo, useEffect, useState} from 'react';

import {RouterService} from '~/services';
import {eventText, Route} from '~/constants';

import {IClauseProps} from './types';
import PerClause from './PerClause';
import styles from './Clause.module.scss';

const Clause: React.FC<IClauseProps> = ({clause}) => {
  const [active, setActive] = useState(clause || eventText[0].parentId);

  useEffect(() => {
    if (active !== clause) {
      setActive(clause);
    }
  }, [active, clause]);

  const handleClauseClick = (parentId?: string) => {
    setActive(parentId);
    RouterService.push(`${Route.Performance}/${parentId}` as Route);
  };

  const addModalOptions = useMemo(
    () =>
      eventText.map(({number, title, description, id, parentId}) => {
        const isActive = active === parentId;

        return (
          <PerClause
            key={id}
            title={title}
            number={number}
            isActive={isActive}
            description={description}
            onClauseClick={() => handleClauseClick(parentId)}
          />
        );
      }),
    [active],
  );

  return <div className={styles.wrapper}>{addModalOptions}</div>;
};

export default Clause;
