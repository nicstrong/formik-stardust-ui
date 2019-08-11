import { Button, Flex, Form } from '@stardust-ui/react';
import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikCheckboxFormField from './components/FormikCheckboxFormField';
import FormikDropdownFormField from './components/FormikDropdownFormField';
import FormikInputFormField from './components/FormikInputFormField';
import { Debug } from './Debug';

const App: React.FC = () => {

  const FormSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  });

  return (
    <Flex styles={{ padding: '1rem', width: '600px' }}>
      <Formik
        initialValues={{ firstname: '', lastname: '', email: '', conditions: false, colour: 'Red' }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {renderProps => {
          const {
            handleSubmit,
            handleReset,
            handleChange,
            handleBlur,
            isSubmitting,
            errors,
            touched,
            setFieldError,
            setStatus,
            setErrors,
          } = renderProps;
          return <Form onSubmit={
            (e: React.SyntheticEvent<HTMLElement, Event>) => {
              handleSubmit(e as React.SyntheticEvent<HTMLFormElement, Event>)
            }}>

            <Flex gap='gap.medium' fill column>
              <FormikInputFormField fluid label="First name" name="firstname" />
              <FormikInputFormField fluid label="Last name" name="lastname" />
              <FormikInputFormField fluid label="Email" name="email" type='email' />
              <Form.Field name='phonenumber' label='Phone Number' inline />
              {/* control={{ as: Input, fluid: true, placeholder: 'Enter phone number' }} /> */}
              <FormikDropdownFormField label='Favourite Colour' name='colour' placeholder='Choose your colour' items={['Red', 'Green', 'Blue']} />
              <FormikCheckboxFormField inline label="I agree to the Terms and Conditions" name="conditions" />
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
                    content: 'Submit'
                  }}
                />
              </Flex>
              <Flex.Item grow>
                <Debug />
              </Flex.Item>
            </Flex>
          </Form>
        }}
      </Formik>
    </Flex>
  );
}



export default App;
