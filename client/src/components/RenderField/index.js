import React from 'react';
import InputField from './../InputField';
import { Field } from 'redux-form';

export default props => {
  return <Field component={InputField} {...props}/>
}
