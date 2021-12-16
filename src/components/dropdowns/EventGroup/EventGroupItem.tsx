import React, {useCallback, useMemo, useState} from 'react';
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import classNames from 'classnames';

import {IGroup, IGroupItem} from '~/types/dropdowns';

import GroupItem from './GroupItem';
import styles from './EventGroup.module.scss';

const EventGroupItem: React.FC<IGroup> = ({groupName, groupItems}) => {
  const [expanded, setExpanded] = useState(false);
  const [items, setItems] = useState<IGroupItem[]>(groupItems);

  const boxClasses = classNames(styles.events__box, {
    [styles.events__box__open]: expanded,
  });

  const handleClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const updatedItems = Array.from(items);
      const [removed] = updatedItems.splice(result.source.index, 1);
      updatedItems.splice(result.destination.index, 0, removed);

      setItems(updatedItems);
    },
    [items],
  );

  const memoizedGroupItems = useMemo(
    () =>
      items.map((item, index) => (
        <GroupItem key={item.id} index={index} {...item} />
      )),
    [items],
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={styles.events}>
        <div className={styles.events__line} />
        <div className={boxClasses}>
          <div onClick={handleClick} className={styles.events__box__content}>
            <div className={styles.events__box__content__title}>
              {groupName}
            </div>
            <div className={styles.events__box__content__count}>
              {memoizedGroupItems.length}
            </div>
            <div className={styles.events__box__content__icon} role="button">
              ICON
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={styles.events__expanded__wrapper}>
              {memoizedGroupItems}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
};

export default EventGroupItem;
