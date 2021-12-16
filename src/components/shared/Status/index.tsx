import React from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import {IStatusProps} from './types';
import styles from './Status.module.scss';

const Status: React.FC<IStatusProps> = ({type = 'draft', className = ''}) => {
  const buttonClasses = classNames(
    styles.container,
    styles[`container_${type}`],
    {
      [className]: className,
    },
  );

  return (
    <div className={buttonClasses}>
      <Typography className={styles.container__text} tagName="span">
        {type}
      </Typography>
    </div>
  );
};

export default Status;
