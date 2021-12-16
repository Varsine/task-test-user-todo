import React, {useContext, useMemo} from 'react';

import {Pluse} from '~/assets';
import {AddEventModal, Button, Typography} from '~/components';
import {ModalContext} from '~/context';

import {IEventGroupProps} from './types';
import styles from './EventGroup.module.scss';
import EventGroupItem from './EventGroupItem';

const EventGroup: React.FC<IEventGroupProps> = ({groups}) => {
  const {openModal} = useContext(ModalContext);

  const accordionItems = useMemo(
    () =>
      groups.map(({id, ...rest}) => (
        <EventGroupItem key={id} id={id} {...rest} />
      )),
    [groups],
  );

  return (
    <div className={styles.events__wrapper}>
      <div className={styles.events__wrapper__space}>
        <div className={styles.events__wrapper__header}>
          <Typography className={styles.events__wrapper__header__events}>
            Events for:
          </Typography>
          <Typography className={styles.events__wrapper__header__cfr}>
            CFR outturn and CIF outturn
          </Typography>
          <div className={styles.events__wrapper__header__length}>
            {accordionItems.length}
          </div>
        </div>

        <Button
          type="submit"
          size="medium"
          variant="primary"
          LeftIcon={Pluse}
          onClick={() => openModal(<AddEventModal />)}>
          <p>Add event</p>
        </Button>
      </div>

      {accordionItems}
    </div>
  );
};

export default EventGroup;
