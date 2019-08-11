import { Dropdown, DropdownProps } from "@stardust-ui/react";
import React from 'react';
import { setFieldValue } from "../setFieldValue";
import FormikFormField, { FormikFormFieldControlProps, RenderPropTypes } from "./FormikFormField";


type FormikDropdownFieldProps = FormikFormFieldControlProps<DropdownProps>

const FormikDropdownFormField: React.FC<FormikDropdownFieldProps> = (props) => {
    return (
        <FormikFormField
            render={(props: RenderPropTypes<DropdownProps>) => {
                const { field, form, defaultValue, ...dropdownRest } = props
                return <Dropdown
                    onSelectedChange={(event: React.SyntheticEvent<HTMLElement>, data?: DropdownProps): void => {
                        setFieldValue(form, field.name, data ? data.value : undefined)
                    }}
                    value={field.value}
                    onBlur={field.onBlur}
                    {...dropdownRest}
                />
            }}
            {...props}
        />
    )
}

export default FormikDropdownFormField