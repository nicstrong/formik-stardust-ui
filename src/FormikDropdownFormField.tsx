import { Dropdown, DropdownProps } from '@stardust-ui/react';
import React from 'react';
import {
  FormikFormField,
  FormikFormFieldControlProps,
  RenderPropTypes,
} from './FormikFormField';
import { setFieldValue } from './setFieldValue';

type FormikDropdownFieldProps = FormikFormFieldControlProps<DropdownProps>;

export const FormikDropdownFormField: React.FC<
  FormikDropdownFieldProps
> = props => {
  return (
    <FormikFormField
      render={(props: RenderPropTypes<DropdownProps>) => {
        const { field, form, defaultValue, ...dropdownRest } = props;
        return (
          <Dropdown
            onSelectedChange={(
              _event: React.SyntheticEvent<HTMLElement>,
              data?: DropdownProps
            ): void => {
              setFieldValue(form, field.name, data ? data.value : undefined);
            }}
            value={field.value}
            onBlur={field.onBlur}
            {...dropdownRest}
          />
        );
      }}
      {...props}
    />
  );
};
