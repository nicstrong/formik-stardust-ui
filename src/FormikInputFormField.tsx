import { Form, Input, InputProps } from '@fluentui/react-northstar';
import { useField } from 'formik';
import React from 'react';

type FormikInputFieldProps = Omit<InputProps, 'name'> & {
  name: string;
};

export const FormikInputFormField: React.FC<FormikInputFieldProps> = ({
  label,
  ...props
}) => {
  const [field, metadata] = useField(props);

  const isError = metadata.touched && metadata.error !== undefined;
  const id = props.id || props.name;

  return (
    <Form.Field>
      <Form.Label htmlFor={id} id={`${id}-label`}>
        {label}
      </Form.Label>
      <Input error={isError} {...field} {...props} />
      {isError && (
        <Form.Message id={`${id}message-id`} role="alert" error={isError}>
          {metadata.error}
        </Form.Message>
      )}
    </Form.Field>
  );
};
