import React from 'react';
import classNames from 'classnames';

import {useSticky} from '~/hooks';
import {option, contract} from '~/constants';

import Filter from '../../dropdowns/Filter';
import Contract from '../../dropdowns/Contract';
import Typography from '../../shared/Typography';
import DatePicker from '../../shared/DatePicker';

import {IEventsPerformanceProps} from './types';
import styles from './EventsPerformance.module.scss';

const EventsPerformance: React.FC<IEventsPerformanceProps> = ({
  clause,
  children,
}) => {
  const {isSticky, stickyContainerRef} = useSticky();

  const headerPositionClasses = classNames(styles.header__position, {
    [styles.header__position_sticky]: isSticky,
  });

  return (
    <div ref={stickyContainerRef} className="container-performance">
      <section>
        <div className={styles.header}>
          <div>
            <Typography
              type="Large"
              variant="Heading"
              className={styles.header__title}>
              Execution and performance
            </Typography>
          </div>
          <div className={styles.header__filters}>
            <DatePicker />

            <Filter
              options={option}
              placeholder="Filters"
              className={`${styles.header__filters_inner} ${styles.header__filters_second}`}
            />
          </div>
        </div>

        <div className={headerPositionClasses}>
          <Contract
            clause={clause}
            options={contract}
            placeholder="Select Contract"
            className={styles.select__contract}
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default EventsPerformance;
