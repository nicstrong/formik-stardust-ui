import { Dropdown, DropdownProps, Form } from '@fluentui/react-northstar'
import { useField } from 'formik'
import React from 'react'

type FormikDropdownFieldProps = Omit<DropdownProps, 'name' | 'onChange'> & {
  label: string
  name: string
}

export function FormikDropdownFormField({
  label,
  name,
  ...props
}: FormikDropdownFieldProps) {
  const [field, metadata, { setValue, setTouched }] = useField(name)

  const isError = metadata.touched && metadata.error !== undefined

  return (
    <Form.Field>
      <Form.Label htmlFor={name} id={`${name}-label`}>
        {label}
      </Form.Label>

      <Dropdown
        defaultValue={metadata.initialValue}
        onChange={(_e, d) => d.value && setValue(d.value)}
        onBlur={_e => setTouched(true)}
        value={field.value}
        {...props}
      />

      {isError && (
        <Form.Message id={`${name}message`} role="alert" error={isError}>
          {metadata.error}
        </Form.Message>
      )}
    </Form.Field>
  )
}
