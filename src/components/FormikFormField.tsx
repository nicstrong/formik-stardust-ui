import { Form, FormFieldProps, Text } from "@stardust-ui/react";
import { ErrorMessage, Field, FieldProps } from "formik";
import React from 'react';

export type RenderPropTypes<T> = T & FieldProps<any>

export type FormikFormFieldControlProps<T> =
    T &
    Pick<FormFieldProps, 'label' | 'inline' | 'control'> &
    { name: string }

export type FormikFormFieldProps<T> =
    FormikFormFieldControlProps<T> &
    { render?: (props: RenderPropTypes<T>) => React.ReactNode }

const FormikFormField = <T extends any>(props: FormikFormFieldProps<T>) => {
    const { name, label, inline, render, control, ...rest } = props
    return (
        <Field name={name}
            render={(props: FieldProps) => {
                const formControl = render
                    ? render({ ...props, ...rest, name })
                    : control
                return <Form.Field
                    label={label}
                    inline={inline}
                    name={name}
                    message={
                        <ErrorMessage
                            name={name}
                            render={(msg) => <Text error content={msg} />}
                        />}
                    control={formControl}
                    {...rest}
                />
            }} />
    )
}

export default FormikFormField