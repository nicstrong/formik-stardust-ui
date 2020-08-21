import { Form, RadioGroup, RadioGroupProps } from '@fluentui/react-northstar';
import { useField } from 'formik';
import React from 'react';

type FormikRadioGroupFieldProps = Omit<RadioGroupProps, 'name'> & {
  label: string;
  name: string;
};

export const FormikRadioGroupFormField: React.FC<
  FormikRadioGroupFieldProps
> = ({ label, ...props }) => {
  const [field, metadata] = useField(props);

  const isError = metadata.touched && metadata.error !== undefined;
  const id = props.name;

  return (
    <Form.Field>
      <Form.Label htmlFor={id} id={`${id}-label`}>
        {label}
      </Form.Label>
      <RadioGroup
        defaultCheckedValue={metadata.initialValue}
        {...field}
        {...props}
      />
      {isError && (
        <Form.Message id={`${id}message-id`} role="alert" error={isError}>
          {metadata.error}
        </Form.Message>
      )}
    </Form.Field>
  );
};
