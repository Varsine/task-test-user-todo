import Image from 'next/image';
import {useMemo} from 'react';
import classNames from 'classnames';

import {DownloadIcon, OvalImage} from '~/assets';
import {downloadFile} from '~/utils';

import Typography from '../Typography';

import {IUserApproval} from './types';
import styles from './UserApproval.module.scss';

const UserApproval: React.FC<IUserApproval> = ({name, files, date, event}) => {
  const commentFiles = useMemo(
    () =>
      files?.map(({id, source, name}) => (
        <div className={styles.container__content__info__files__file} key={id}>
          <Typography type="Semibold">{name}</Typography>
          <DownloadIcon onClick={() => downloadFile(source, name)} />
        </div>
      )),
    [files],
  );

  const fileClasses = classNames(styles.container__content__info__files, {
    [styles.container__content__info__files__isItem]: !!files,
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__image}>
          <Image src={OvalImage} alt="user" />
        </div>
        <div className={styles.container__content__info}>
          <div className={styles.container__content__info__first}>
            <Typography
              variant="Text"
              type="Semibold"
              className={styles.container__content__info__first__name}>
              {name}
            </Typography>
            <Typography
              variant="Text"
              type="Semibold"
              className={styles.container__content__info__first__date}>
              {date}
            </Typography>
          </div>
          <div>
            <Typography
              className={styles.container__content__info__first__event}
              variant="Button"
              type="Small">
              {event}
            </Typography>
          </div>
          <div className={fileClasses}>{commentFiles}</div>
        </div>
      </div>
    </div>
  );
};

export default UserApproval;
