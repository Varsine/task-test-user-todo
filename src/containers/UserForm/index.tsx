import React from 'react';
import {useRouter} from 'next/router';

import {Route} from '~/constants';
import {userForm} from '~/utils';
import {Form, Link} from '~/components';
import {RouterService} from '~/services';
import {userActions, userSelect} from '~/store/user';
import {useAppDispatch, useAppSelector} from '~/hooks';

import {UserDataProps} from '../Dashboard/types';

import styles from './UserForm.module.scss';

const UserForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const {query} = useRouter();
  const {filterUser} = useAppSelector(userSelect);
  const {fields, schema} = userForm;

  const btnText = query.name !== 'create' ? 'Create user' : 'Edit user';

  const currentTitle =
    query.name === 'create' ? 'Create user data' : 'Edit user data';

  const editFields = fields.map((el) => {
    const defaultValue =
      filterUser && filterUser[el.name as keyof UserDataProps];
    return {...el, defaultValue};
  });

  const currentFields = query.name !== 'create' ? editFields : fields;

  const handleFormSubmit = (values: any) => {
    const {name} = query;
    const userIndex = Number(name?.slice(-1)) - 1;
    name === 'create'
      ? dispatch(userActions.creatNewUser(values))
      : dispatch(userActions.editUser({index: userIndex, newValue: values}));
    RouterService.push(Route.Home);
  };

  return (
    <div className={styles.wrapper}>
      <Link to={Route.Home} className={styles.wrapper__back_link}>
        Back
      </Link>
      <h2 className={styles.wrapper__title}>{currentTitle}</h2>
      <Form
        className={styles.wrapper__form}
        submitText={btnText}
        addFormBtnClasses={styles.wrapper__form__btn}
        form={{
          fields: currentFields,
          schema,
        }}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default UserForm;
