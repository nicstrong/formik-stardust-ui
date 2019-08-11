import { Checkbox, CheckboxProps } from "@stardust-ui/react";
import React from 'react';
import { setFieldValue } from "../setFieldValue";
import FormikFormField, { FormikFormFieldControlProps, RenderPropTypes } from "./FormikFormField";


type FormikCheckboxFormFieldProps = FormikFormFieldControlProps<CheckboxProps>

const FormikCheckboxFormField: React.FC<FormikCheckboxFormFieldProps> = (props) => {
    return (
        <FormikFormField
            render={(props: RenderPropTypes<CheckboxProps>) => {
                const { field, form, ...inputRest } = props
                return <Checkbox
                    onChange={(event: React.SyntheticEvent<HTMLElement>, data?: CheckboxProps) => {
                        setFieldValue(form, field.name, data ? data.checked : undefined)
                    }}
                    checked={field.value}
                    onBlur={field.onBlur}
                    {...inputRest}
                />
            }}
            {...props}
        />
    )
}

export default FormikCheckboxFormField