import { Form } from '@fluentui/react-northstar';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

type FormikFileInputFieldProps = FieldAttributes<any> & {
  label: string;
};

export function FormikFileInputFormField({
  label,
  name,
  ...props
}: FormikFileInputFieldProps) {
  const [_, metadata, { setValue, setTouched }] = useField(props);

  const isError = metadata.touched && metadata.error !== undefined;

  return (
    <Form.Field>
      <Form.Label htmlFor={name} id={`${name}-label`}>
        {label}
      </Form.Label>
      <input
        type="file"
        name="name"
        onChange={e => {
          const file = e.target.files![0];
          setValue(file);
          setTouched(true);
        }}
        onBlur={() => setTouched(true)}
      />

      {isError && (
        <Form.Message id={`${name}message`} role="alert" error={isError}>
          {metadata.error}
        </Form.Message>
      )}
    </Form.Field>
  );
}
