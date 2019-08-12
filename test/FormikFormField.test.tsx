import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FormikFormField } from '../src';

describe('FormikFormField', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FormikFormField name="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
