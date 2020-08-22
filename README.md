Wrappers for using [Formik](https://github.com/jaredpalmer/formik) with [Fluent UI - React Northstar](https://github.com/microsoft/fluentui/tree/master/packages/fluentui).

## Introduction

Combine a `Form.Field` and control in a single control managed by Formik.

Wrappers exist so far for:

- [Input](https://fluentsite.z22.web.core.windows.net/components/input/definition) - FormikInputFormField
- [Checkbox](https://fluentsite.z22.web.core.windows.net/components/checkbox/definition) - FormikCheckboxFormField
- [Dropdown](https://fluentsite.z22.web.core.windows.net/components/dropdown/definition) - FormikDropdownFormField
- [RadioGroup](https://fluentsite.z22.web.core.windows.net/components/radio-group/definition) - FormikRadioGroupFieldProps

There is also `FormikInputFormField` for file upload but that is not a React Northstar control.

## Example

```jsx
import { Button, Flex, Form } from '@fluentui/react-northstar';
import { Formik } from 'formik';
import { FormikCheckboxFormField, FormikDropdownFormField, FormikInputFormField } from 'formik-stardust-ui';
import React from 'react';

 <Flex styles={{ padding: '1rem', width: '600px' }}>
      <Formik initialValues={{ firstname: '', lastname: '', conditions: false, colour: 'Red' }}>
        {(formik) => {
          return (
            <Form  onSubmit={(e) => formik.handleSubmit(e as React.FormEvent<HTMLFormElement>)} >
            <Flex gap='gap.medium' fill column>
              <FormikInputFormField fluid label="First name" name="firstname" />
              <FormikInputFormField fluid label="Last name" name="lastname" />
              <FormikDropdownFormField
                      label='Favourite Colour'
                      name='colour'
                      placeholder='Choose your colour'
                      items={['Red', 'Green', 'Blue']} />
              <FormikCheckboxFormField inline label="I agree to the Terms and Conditions" name="conditions" />
              <Flex gap="gap.smaller" hAlign="end">
                <Form.Field
                  control={{
                    as: Button,
                    primary: true,
                    content: 'Submit'
                  }}
                />
              </Flex>
            </Flex>
          </Form>
        )}}
      </Formik>
    </Flex>
```
