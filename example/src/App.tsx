import { Button, Flex, Form } from '@stardust-ui/react';
import { Formik } from 'formik';
import {
  FormikCheckboxFormField,
  FormikDropdownFormField,
  FormikInputFormField,
  FormikRadioGroupFormField,
} from 'formik-stardust-ui';
import React from 'react';
import * as Yup from 'yup';
import { Debug } from './Debug';

const App: React.FC = () => {
  const FormSchema = Yup.object().shape({
    string_field: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number_field: Yup.number()
      .min(0, 'Greater than zero')
      .max(10, 'Less than 10')
      .required('Required'),
  });

  return (
    <Flex styles={{ padding: '1rem', width: '600px' }}>
      <Formik
        initialValues={{
          string_field: '',
          number_field: 5,
          checkbox_field: false,
          dropdown_field: 'Red',
          radiogroup_field: 'Bar',
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {renderProps => {
          const { handleSubmit, handleReset } = renderProps;
          return (
            <Form
              onSubmit={(e: React.SyntheticEvent<HTMLElement, Event>) => {
                handleSubmit(e as React.SyntheticEvent<HTMLFormElement, Event>);
              }}
            >
              <Flex gap="gap.medium" fill column>
                <FormikInputFormField
                  fluid
                  label="String Field"
                  name="string_field"
                />
                <FormikInputFormField
                  fluid
                  label="Number Field"
                  name="number_field"
                  type="number"
                />
                <FormikDropdownFormField
                  label="Dropdown Field"
                  name="dropdown_field"
                  placeholder="Choose your colour"
                  items={['Red', 'Green', 'Blue']}
                />
                <FormikRadioGroupFormField
                  label="Radio Group Field"
                  name="radiogroup_field"
                  items={['Foo', 'Bar'].map(i => ({
                    key: i,
                    value: i,
                    name: i,
                    label: i,
                    'aria-label': i,
                  }))}
                />
                <FormikCheckboxFormField
                  inline
                  label="Checkbox Field"
                  name="checkbox_field"
                />
                <Flex gap="gap.smaller" hAlign="end">
                  <Form.Field
                    control={{
                      as: Button,
                      onClick: handleReset,
                      content: 'Cancel',
                    }}
                  />
                  <Form.Field
                    control={{
                      as: Button,
                      primary: true,
                      content: 'Submit',
                    }}
                  />
                </Flex>
                <Flex.Item grow>
                  <Debug />
                </Flex.Item>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};

export default App;
