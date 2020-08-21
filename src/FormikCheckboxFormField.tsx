import { Checkbox, CheckboxProps, Form } from '@fluentui/react-northstar';
import { useField } from 'formik';
import React from 'react';

type FormikCheckboxFieldProps = Omit<CheckboxProps, 'name'> & {
  name: string;
};

export const FormikCheckboxFormField: React.FC<FormikCheckboxFieldProps> = ({
  label,
  name,
  ...props
}) => {
  const [, metadata, { setValue, setTouched }] = useField({
    name,
    type: 'checkbox',
  });

  const isError = metadata.touched && metadata.error !== undefined;

  return (
    <Form.Field>
      <Form.Label htmlFor={name} id={`${name}-label`}>
        {label}
      </Form.Label>
      <Checkbox
        defaultChecked={metadata.initialValue}
        onChange={(_e, d) => d && setValue(d.checked)}
        onBlur={() => setTouched(true)}
        {...props}
      />
      {isError && (
        <Form.Message id={`${name}-message`} role="alert" error={isError}>
          {metadata.error}
        </Form.Message>
      )}
    </Form.Field>
  );
};
