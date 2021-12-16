import React, {useState, useMemo, useRef} from 'react';
import Image from 'next/image';

import {useOnClickOutside} from '~/hooks';
import {InternalUserModal} from '~/constants';
import {BoldSearch, OvalImage} from '~/assets';
import {User, Typography, Input} from '~/components';

import styles from './InternalUsersForm.module.scss';

const InternalUsersForm: React.FC = () => {
  const internalUserRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState<any[]>([]);

  useOnClickOutside(internalUserRef, (event: any) => {
    if (!event.target.getAttribute('data-toggle')) {
      setIsOpen(false);
    }
  });

  const internalUsers = useMemo(
    () =>
      InternalUserModal.filter(({id}) => !selectedUsers.includes(id)).map(
        ({id, name, position}) => (
          <div
            key={id}
            className={styles.container__box}
            onClick={() => {
              setSelectedUsers((prevState) => [...prevState, id]);
              setIsOpen(false);
            }}>
            <div className={styles.container__box__items}>
              <div className={styles.container__box__items__image}>
                <Image src={OvalImage} alt="user" />
              </div>
              <div className={styles.container__box__items__info}>
                <Typography
                  type="Medium"
                  variant="Text"
                  className={styles.container__box__items__info__name}>
                  {name}
                </Typography>
                <Typography
                  className={styles.container__box__items__info__position}
                  variant="Text"
                  type="Small">
                  {position}
                </Typography>
              </div>
            </div>
          </div>
        ),
      ),
    [selectedUsers],
  );

  const selectedUsersList = useMemo(
    () =>
      InternalUserModal.filter(({id}) => selectedUsers.includes(id)).map(
        ({id, name, position}) => (
          <div key={id} className={styles.expanded}>
            <User name={name} position={position} isExpanded />
          </div>
        ),
      ),
    [selectedUsers],
  );

  const handleSearchEventClick = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <Input
        name="search_Input"
        data-toggle="testing"
        RightIcon={BoldSearch}
        placeholder="Search event"
        onClick={handleSearchEventClick}
        className={styles.container__input}
        innerClassName={styles.container__input__inner}
        disabled={selectedUsers.length === InternalUserModal.length}
      />
      {!isOpen ? (
        <React.Fragment>
          {selectedUsers.length ? (
            selectedUsersList
          ) : (
            <div className={styles.container__content__empty}>
              <Typography
                className={styles.container__content__type}
                variant="Text"
                type="Small">
                Select users from the dropdown
              </Typography>
            </div>
          )}
        </React.Fragment>
      ) : (
        <div ref={internalUserRef} className={styles.container__content}>
          {internalUsers}
        </div>
      )}
    </div>
  );
};

export default InternalUsersForm;
