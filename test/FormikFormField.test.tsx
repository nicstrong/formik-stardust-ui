import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormikInputFormField } from '../src';

describe('FormikInputFormField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormikInputFormField name="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
