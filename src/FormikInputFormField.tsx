import { Input, InputProps } from '@stardust-ui/react';
import React from 'react';
import {
  FormikFormField,
  FormikFormFieldControlProps,
  RenderPropTypes,
} from './FormikFormField';
import { setFieldValue } from './setFieldValue';

type FormikInputFieldProps = FormikFormFieldControlProps<InputProps>;

export const FormikInputFormField: React.FC<FormikInputFieldProps> = props => {
  const { onChange, ...rest } = props;
  return (
    <FormikFormField
      render={(props: RenderPropTypes<InputProps>) => {
        const { field, form, ...inputRest } = props;
        return (
          <Input
            onChange={(
              event: React.SyntheticEvent<HTMLElement>,
              data?: InputProps & { value: string }
            ) => {
              setFieldValue(form, field.name, data ? data.value : undefined);
              onChange && onChange(event, data);
            }}
            value={field.value}
            onBlur={field.onBlur}
            {...inputRest}
          />
        );
      }}
      {...rest}
    />
  );
};
