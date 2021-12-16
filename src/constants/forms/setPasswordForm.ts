import * as yup from 'yup';

import {EyeShowIcon, EyeHideIcon} from '~/assets';
import {Form, Field} from '~/components/forms/Form/types';

const fields: Field[] = [
  {
    name: 'password',
    type: 'password',
    label: 'Create password',
    placeholder: '',
    RightIcon: EyeShowIcon,
    RightToggledIcon: EyeHideIcon,
  },
  {
    name: 'repassword',
    type: 'password',
    label: 'Repeat password',
    placeholder: '',
    RightIcon: EyeShowIcon,
    RightToggledIcon: EyeHideIcon,
  },
];

const schema = yup.object().shape({
  password: yup
    .string()
    .required('The Password is required')
    .min(5, 'Password is too short - should be 5 chars minimum.'),
  repassword: yup
    .string()
    .required('The Confirm Password is required')
    .min(5, 'Confirm Password is too short - should be 5 chars minimum.'),
});

const setPasswordForm: Form = {
  fields,
  schema,
};

export default setPasswordForm;
