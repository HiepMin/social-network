import React from 'react';
import { reduxForm } from 'redux-form';

const withForm = obj => WrappedComponent => {
  const WithForm = props => {
    return <WrappedComponent {...props} />
  } 
  return reduxForm(obj)(WithForm);
}
export default withForm;
