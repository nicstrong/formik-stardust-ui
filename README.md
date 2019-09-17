Wrappers for using [Formik](https://github.com/jaredpalmer/formik) with [Stardust UI React ](https://reactstrap.github.io/react).

## Introduction

Combine a Form.Field and control in a single control managed by Formik.

Wrappers exist so far for:

- [Input](https://stardust-ui.github.io/react/components/input) - FormikInputFormField
- [Checkbox](https://stardust-ui.github.io/react/components/checkbox) - FormikCheckboxFormField
- [Dropdown](https://stardust-ui.github.io/react/components/dropdown) - FormikDropdownFormField

## Example

```jsx
import { Button, Flex, Form } from '@stardust-ui/react';
import { Formik } from 'formik';
import { FormikCheckboxFormField, FormikDropdownFormField, FormikInputFormField } from 'formik-stardust-ui';
import React from 'react';

 <Flex styles={{ padding: '1rem', width: '600px' }}>
      <Formik initialValues={{ firstname: '', lastname: '', conditions: false, colour: 'Red' }}>
        {renderProps => {
          const {
            handleSubmit
          } = renderProps;
          return <Form onSubmit={
            (e: React.SyntheticEvent<HTMLElement, Event>) => {
              handleSubmit(e as React.SyntheticEvent<HTMLFormElement, Event>)
            }}>

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
        }}
      </Formik>
    </Flex>
```
