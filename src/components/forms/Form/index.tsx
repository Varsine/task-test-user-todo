import React, {useImperativeHandle, useCallback, forwardRef} from 'react';
import classNames from 'classnames';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import Input from '../../shared/Input';
import Button from '../../shared/Button';
import CheckboxRow from '../../shared/CheckboxRow';

import {IFormProps} from './types';
import styles from './Form.module.scss';

const Form = forwardRef<any, IFormProps>(
  ({form: {fields, schema}, onSubmit, submitText, className = ''}, ref) => {
    const {
      register,
      setFocus,
      handleSubmit,
      formState: {errors, isValid},
    } = useForm({
      mode: 'onChange',
      reValidateMode: 'onChange',
      resolver: yupResolver(schema),
    });

    const formClasses = classNames(styles.container, {
      [className]: className,
    });

    const renderField = useCallback(
      (name, {labelOptions, ...rest}) => {
        const commonProps = {
          key: name,
          ...rest,
          ...register(name),
          error: errors[name]?.message,
        };

        switch (rest.type) {
          case 'checkbox':
            return (
              <CheckboxRow
                key={name}
                inputProps={commonProps}
                labelOptions={labelOptions}
              />
            );
          default:
            return <Input {...commonProps} />;
        }
      },
      [errors, register],
    );

    const renderFields = useCallback(
      () => fields.map(({name, ...rest}) => renderField(name, rest)),
      [fields, renderField],
    );

    const onSubmitFailed = useCallback(() => {
      setFocus(fields[0].name);
    }, [fields, setFocus]);

    useImperativeHandle(
      ref,
      () => ({
        onSubmitFailed,
      }),
      [onSubmitFailed],
    );

    return (
      <form className={formClasses} onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <Button
          size="large"
          type="submit"
          disabled={!isValid}
          className={styles.container__button}>
          {submitText}
        </Button>
      </form>
    );
  },
);

export default Form;
