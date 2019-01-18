import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
const Wrapper = styled.div`
  margin-bottom: 1rem;
`;
const TextArea = styled.textarea`
  width: 100%;
  border-radius: .4rem;
  border: none;
  padding: 13px 1.3rem;
  font-size: 12px;
`;
const TextAreaField = ({
  placeholder,
  name,
  input,
  className
}) => (
  <Wrapper>
    <TextArea 
      className={className}
      {...input}
      placeholder={placeholder} 
      type="text" 
      name={name} />
  </Wrapper>
)
export default props => <Field {...props} component={TextAreaField} />;
