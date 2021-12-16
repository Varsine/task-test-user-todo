import React from 'react';

import Typography from '../Typography';

import {IProgressBarProps} from './types';
import styles from './ProgressBar.module.scss';

const ProgressBar: React.FC<IProgressBarProps> = ({
  date,
  onClick,
  daysLeft,
  deadline,
  percentRage,
}) => (
  <React.Fragment>
    <div className={styles.container__wrapper}>
      <Typography
        variant="Text"
        type="Semibold"
        className={styles.container__wrapper__label}>
        {deadline}
      </Typography>
      <Typography
        type="Medium"
        variant="Text"
        className={styles.container__wrapper__date}>
        {date}
      </Typography>
    </div>

    <div onClick={onClick} className={styles.container}>
      <div
        className={styles.container__range}
        style={{width: `${percentRage}%`}}
      />
    </div>

    <Typography
      variant="Text"
      type="Semibold"
      className={styles.container__days}>
      {daysLeft}
    </Typography>
  </React.Fragment>
);

export default ProgressBar;
