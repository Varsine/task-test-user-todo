import React from 'react';
import classNames from 'classnames';

import {Typography} from '~/components';

import {IPerClauseProps} from './types';
import styles from './Clause.module.scss';

const PerClause: React.FC<IPerClauseProps> = ({
  title,
  number,
  isActive,
  description,
  onClauseClick,
}) => {
  const innerClasses = classNames(styles.container__inner, {
    [styles.container__inner_active]: isActive,
  });

  return (
    <div onClick={onClauseClick} className={styles.container}>
      <div className={innerClasses}>
        <div className={styles.container__content}>
          <Typography
            variant="Text"
            type="Regular"
            className={styles.container__content__number}>
            {number}
          </Typography>

          <Typography
            variant="Text"
            type="Regular"
            className={styles.container__content__title}>
            {title}
          </Typography>
        </div>

        <div className={styles.container__content__description}>
          <Typography
            variant="Text"
            type="Semibold"
            className={styles.container__content__description__txt}>
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PerClause;
