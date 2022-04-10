import * as yup from 'yup';

import {Field, Form} from './types';

const fields: Field[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
    placeholder: 'Enter your first name',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Enter your last name',
  },

  {
    name: 'address',
    type: 'text',
    label: 'Address',
    placeholder: 'Enter your address',
  },

  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email address',
  },

  {
    name: 'phone',
    type: 'number',
    label: 'Phone',
    placeholder: '0771234567',
  },
];

const schema = yup.object().shape({
  lastName: yup
    .string()
    .required('The first name is required')
    .min(4, 'First name is too short - should be 4 chars minimum.'),
  firstName: yup
    .string()
    .required('The last name is required')
    .min(4, 'First name is too short - should be 4 chars minimum.'),
  address: yup
    .string()
    .required('The address is required')
    .min(6, 'First name is too short - should be 6 chars minimum.'),
  email: yup
    .string()
    .required('The email is required')
    .email('The Email must be a valid email address'),
  phone: yup
    .string()
    .required('The phone is required')
    .matches(
      /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{3,6}$/,
      'Please write a valid phone number',
    ),
});

const userForm: Form = {
  fields,
  schema,
};

export default userForm;
