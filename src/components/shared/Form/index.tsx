import React, {
  useMemo,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import classNames from 'classnames';
import {isUndefined} from 'lodash';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, DefaultValues} from 'react-hook-form';

import Input from '../Input';
import Button from '../Button';

import {IFormProps} from './types';
import styles from './Form.module.scss';

const Form = forwardRef<any, IFormProps>(
  (
    {
      form: {fields, schema},
      onSubmit,
      submitText,
      formHandler,
      className = '',
      labelText = '',
      inputClassName = '',
      labelClassName = '',
      innerClassName = '',
      addFormBtnClasses = '',
    },
    ref,
  ) => {
    const defaultValues = useMemo(
      () =>
        fields.reduce<DefaultValues<any>>((acc, curVal) => {
          const {defaultValue, name} = curVal;

          if (!isUndefined(defaultValue) && name) {
            acc[name] = defaultValue;
          }

          return acc;
        }, {}),
      [fields],
    );

    const {
      register,
      setFocus,
      handleSubmit,
      formState: {errors, isValid},
    } = useForm({
      defaultValues,
      mode: 'onChange',
      reValidateMode: 'onChange',
      resolver: yupResolver(schema),
    });

    const formClasses = classNames(styles.container, className);

    const disabledButtonClasses = classNames(
      styles.container__button,
      addFormBtnClasses,
      {
        [styles.container__button_disabled]: !isValid,
      },
    );

    const renderField = useCallback(
      (name, {...rest}) => {
        const commonProps = {
          key: name,
          ...rest,
          ...register(name),
          error: errors[name]?.message,
        };

        return (
          <Input
            label={labelText}
            className={inputClassName}
            labelClassName={labelClassName}
            innerClassName={innerClassName}
            {...commonProps}
          />
        );
      },
      [
        errors,
        register,
        labelText,
        inputClassName,
        labelClassName,
        innerClassName,
      ],
    );

    const renderFields = useCallback(
      () => fields.map(({name, ...rest}) => renderField(name, rest)),
      [fields, renderField],
    );

    const onSubmitFailed = useCallback(() => {
      setFocus(fields[0].name as string);
    }, [fields, setFocus]);

    useImperativeHandle(
      ref,
      () => ({
        onSubmitFailed,
      }),
      [onSubmitFailed],
    );

    return (
      <form
        autoComplete="off"
        className={formClasses}
        onSubmit={handleSubmit(onSubmit)}>
        {renderFields()}
        <Button
          type="submit"
          disabled={!isValid}
          onClick={formHandler}
          className={disabledButtonClasses}>
          {submitText}
        </Button>
      </form>
    );
  },
);

export default Form;
