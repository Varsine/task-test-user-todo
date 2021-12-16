import React, {useContext} from 'react';
import {useForm} from 'react-hook-form';

import {ModalContext} from '~/context';
import {ProgressBar, Typography, DateInput, Time, Button} from '~/components';

import styles from './Deadline.module.scss';

const DeadlineModal: React.FC = () => {
  const {closeModal} = useContext(ModalContext);

  const {handleSubmit, register} = useForm({
    mode: 'onChange',
  });

  const handleAddEventSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data, 'data');
  };

  return (
    <form
      className={styles.deadline}
      onSubmit={handleSubmit(handleAddEventSubmit)}>
      <div className={styles.deadline__content}>
        <Typography
          type="Large"
          variant="Heading"
          className={styles.deadline__content__title}>
          Deadline set-up
        </Typography>
        <ProgressBar
          percentRage={50}
          deadline="Deadline"
          daysLeft="6 days left"
          date="16 Dec, 2021 - 14:00"
        />
        <div className={styles.deadline__content__inputs}>
          <DateInput
            label="Deadline date"
            placeholder="DD.MM.YYYY"
            {...register('dateInput')}
          />
          <Time label="Time" placeholder="00:00" {...register('timeInput')} />
        </div>
        <div className={styles.deadline__content__footer}>
          <Button
            size="medium"
            type="submit"
            variant="ghost"
            onClick={closeModal}>
            Cancel
          </Button>

          <Button type="submit" size="medium" variant="primary">
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default DeadlineModal;
