import React, {useMemo, useCallback, useContext} from 'react';
import {useForm} from 'react-hook-form';

import {BoldSearch} from '~/assets';
import {ModalContext, ToastContext} from '~/context';
import {AddEventModal as addEventModalMock} from '~/constants';

import Type from '../../shared/Type';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Status from '../../shared/Status';
import Checkbox from '../../shared/Checkbox';
import Typography from '../../shared/Typography';

import styles from './AddEvent.module.scss';

const AddEventModal: React.FC = () => {
  const {closeModal} = useContext(ModalContext);

  const {handleSubmit, register} = useForm({
    mode: 'onChange',
  });

  const toastCtx = useContext(ToastContext);

  const handleToast = () => {
    toastCtx?.toast('Event Added');
    closeModal();
  };

  const handleAddEventSubmit = useCallback((data) => {
    // eslint-disable-next-line no-console
    console.log(
      Object.entries(data).filter((entry) => entry[1]),
      'data',
    );
  }, []);

  const addModalOptions = useMemo(
    () =>
      addEventModalMock.map(({id, title, description, status, type}) => (
        <div key={id} className={styles.container__scrollable__content}>
          <div className={styles.container__scrollable__content__item}>
            <Typography
              className={styles.container__scrollable__content__item__transport}
              variant="Text"
              type="Semibold">
              {title}
            </Typography>
            <Typography
              className={styles.container__scrollable__content__item__suit}
              variant="Text"
              type="Semibold">
              {description}
            </Typography>
            <div
              className={styles.container__scrollable__content__item__statuses}>
              <Status
                type={status}
                className={
                  styles.container__scrollable__content__item__statuses_status
                }
              />
              <Type type={type} />
              <Checkbox useCustomOnChange {...register(`${id}`)} />
            </div>
          </div>
        </div>
      )),
    [register],
  );

  return (
    <form
      onSubmit={handleSubmit(handleAddEventSubmit)}
      className={styles.container}>
      <div className={styles.container__content}>
        <Typography
          className={styles.container__content__title}
          variant="Heading"
          type="Large">
          Add event
        </Typography>

        <div className={styles.container__content__group}>
          <Input
            name="search_Input"
            RightIcon={BoldSearch}
            placeholder="Search event"
            innerClassName={styles.container__content__group__search}
            className={styles.container__content__group__input}
            labelClassName={styles.container__content__group__label}
          />
        </div>
        <div className={styles.container__scrollable}>{addModalOptions}</div>
      </div>
      <div className={styles.container__footer}>
        <Button
          type="submit"
          size="medium"
          variant="ghost"
          onClick={closeModal}>
          Cancel
        </Button>

        <Button
          type="submit"
          onClick={handleToast}
          size="medium"
          variant="primary"
          className={styles.container__footer__last}>
          Add Selected
        </Button>
      </div>
    </form>
  );
};

export default AddEventModal;
