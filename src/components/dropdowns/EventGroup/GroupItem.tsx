import React from 'react';
import Image from 'next/image';
// import {useRouter} from 'next/router';
import {Draggable} from 'react-beautiful-dnd';

// import {Route} from '~/constants';
// import {RouterService} from '~/services';
import {Type, Typography, Status} from '~/components';

import {IGroupItemProps} from './types';
import styles from './EventGroup.module.scss';

const GroupItem: React.FC<IGroupItemProps> = ({
  id,
  date,
  hour,
  type,
  title,
  image,
  userID,
  index,
  status,
  userName,
}) => {
  // const {query} = useRouter();

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          // onClick={() =>
          //   RouterService.push(
          //     // `${Route.Performance}/${query.clause}/${id}` as Route,
          //   )
          // }
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.events__expanded}>
          <div className={styles.events__expanded__content}>
            <div className={styles.events__expanded__content__items}>
              iCON
              <div className={styles.events__expanded__content__count}>
                {userID}
              </div>
              <Typography
                className={styles.events__expanded__content__title}
                variant="Text"
                type="Semibold">
                {title}
              </Typography>
              <div className={styles.events__expanded__content__date}>
                <Typography variant="Text" type="Semibold">
                  {date}
                </Typography>
                <Typography
                  className={styles.events__expanded__content__date_clock}
                  variant="Text"
                  type="Semibold">
                  {hour}
                </Typography>
              </div>
              <div className={styles.events__expanded__content__date__blocks}>
                <Status
                  type={status}
                  className={
                    styles.events__expanded__content__date__blocks_status
                  }
                />
                <Type type={type} />
              </div>
              <div className={styles.events__expanded__content__end}>
                <div className={styles.events__expanded__content__profile}>
                  <div
                    className={
                      styles.events__expanded__content__profile__image
                    }>
                    <Image width={44} src={image} height={44} alt="Secro" />
                  </div>
                  <Typography variant="Text" type="Semibold">
                    {userName}
                  </Typography>
                </div>
                <div
                  className={styles.events__expanded__content__profile__more}>
                  ICON
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default GroupItem;
