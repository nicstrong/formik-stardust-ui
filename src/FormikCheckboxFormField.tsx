import { Checkbox, CheckboxProps } from '@stardust-ui/react';
import React from 'react';
import {
  FormikFormField,
  FormikFormFieldControlProps,
  RenderPropTypes,
} from './FormikFormField';
import { setFieldValue } from './setFieldValue';

type FormikCheckboxFormFieldProps = FormikFormFieldControlProps<CheckboxProps>;

export const FormikCheckboxFormField: React.FC<
  FormikCheckboxFormFieldProps
> = props => {
  return (
    <FormikFormField
      render={(props: RenderPropTypes<CheckboxProps>) => {
        const { field, form, ...inputRest } = props;
        return (
          <Checkbox
            onChange={(
              _event: React.SyntheticEvent<HTMLElement>,
              data?: CheckboxProps
            ) => {
              setFieldValue(form, field.name, data ? data.checked : undefined);
            }}
            checked={field.value}
            onBlur={field.onBlur}
            {...inputRest}
          />
        );
      }}
      {...props}
    />
  );
};
