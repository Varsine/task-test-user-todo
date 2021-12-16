import {useMemo} from 'react';

// import {PencilIcon} from '~/assets';

import Typography from '~/components/shared/Typography';

import {performedActions} from '../../../utils/index';

import {HandlEventStatesProps} from './typesClauseDetails';
import styles from './PerformedAction.module.scss';

const PerformedActionForm: React.FC<HandlEventStatesProps> = ({
  changeEventStates,
}) => {
  const actions = useMemo(
    () =>
      performedActions?.map(({id, name, size}) => (
        <div key={id} className={styles.container__content__items}>
          <div className={styles.container__content__items__content}>
            <Typography
              className={styles.container__content__items__content__name}
              variant="Heading"
              type="Medium">
              {name}
            </Typography>
            <Typography
              className={styles.container__content__items__content__size}
              variant="Heading"
              type="Medium">
              {size}
            </Typography>
          </div>
        </div>
      )),
    [],
  );

  const handleBack = () => {
    changeEventStates();
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <div className={styles.container__content__title}>
          <Typography variant="Heading" type="Medium">
            Performed Action
          </Typography>
          <div className={styles.container__content__title__edit}>
            {/* <PencilIcon /> */}
            <Typography
              onClick={handleBack}
              variant="Heading"
              type="Medium"
              className={styles.container__content__title__edit__txt}>
              Edit
            </Typography>
          </div>
        </div>
        <div className={styles.container__content__items__wrapper}>
          {actions}
        </div>
      </div>
    </div>
  );
};

export default PerformedActionForm;
