import React, {useMemo} from 'react';
import classNames from 'classnames';

import Typography from '../Typography';

import {ITypeProps} from './types';
import styles from './Type.module.scss';

const Type: React.FC<ITypeProps> = ({type = 'verification'}) => {
  const buttonClasses = classNames(
    styles.container,
    styles[`container_${type}`],
  );

  const detectTypeText = useMemo(() => {
    switch (type) {
      case 'receiptOnly':
        return 'Receipt only';

      default:
        return type;
    }
  }, [type]);

  return (
    <div className={buttonClasses}>
      <Typography
        type="Medium"
        tagName="span"
        variant="Heading"
        className={styles.container__text}>
        {detectTypeText}
      </Typography>
    </div>
  );
};

export default Type;
