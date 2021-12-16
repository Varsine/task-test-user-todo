import {useCallback, useContext, useState} from 'react';
import classNames from 'classnames';

import {InternalUsersForm, ExternalUsersForm} from '~/components';
import {ModalContext} from '~/context';

import Button from '../../shared/Button';
import Typography from '../../shared/Typography';

import styles from './AddUser.module.scss';

const AddUserModal: React.FC = () => {
  const {closeModal} = useContext(ModalContext);
  const [activeTab, setActiveTab] = useState('Internal');

  const renderUsersTab = useCallback(() => {
    switch (activeTab) {
      case 'Internal':
        return <InternalUsersForm />;

      default:
        return <ExternalUsersForm />;
    }
  }, [activeTab]);

  const activeInternalClasses = classNames(
    styles.container__content__links__button,
    {
      [styles.container__content__links__button_active]:
        activeTab === 'Internal',
    },
  );

  const activeExternalClasses = classNames(
    styles.container__content__links__button,
    {
      [styles.container__content__links__button_active]:
        activeTab === 'External',
    },
  );

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <Typography
          type="Large"
          variant="Heading"
          className={styles.deadline__content__title}>
          Add users
        </Typography>

        <div className={styles.container__content__links}>
          <Button
            variant="ghost"
            className={activeInternalClasses}
            onClick={() => setActiveTab('Internal')}>
            Internal users
          </Button>
          <Button
            variant="ghost"
            className={activeExternalClasses}
            onClick={() => setActiveTab('External')}>
            External users
          </Button>
        </div>

        {renderUsersTab()}

        <div className={styles.container__footer}>
          <Button
            type="submit"
            size="medium"
            variant="ghost"
            onClick={closeModal}>
            Cancel
          </Button>

          <Button type="submit" size="medium" variant="primary">
            Add Users
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
