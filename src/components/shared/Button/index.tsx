import React from 'react';
import classNames from 'classnames';

import {IButtonProps} from './types';
import styles from './Button.module.scss';

const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  disabled,
  className = '',
  type = 'button',
}) => {
  const buttonClasses = classNames(styles.container, className);

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
