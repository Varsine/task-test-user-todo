import * as yup from 'yup';

import {IInputProps} from '~/components/shared/Input/types';

export type Field = IInputProps & {
  defaultValue?: string | boolean;
};

export type Form = {
  fields: Field[];
  schema: yup.AnyObjectSchema;
};
