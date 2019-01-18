import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Wrapper = styled.div`
  text-align: left;
  color: #5a5a5a;
  margin-bottom: 1rem;
  font-size: 1rem;
`
const TitleForm = ({ title, note }) => 
  <Wrapper>
    <h3>{ title }</h3>
    {note && <small className="text-muted">{note}</small>}
  </Wrapper>
TitleForm.propTypes = {
  title: PropTypes.string.isRequired
}

export default TitleForm;


