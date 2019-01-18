import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TitleForm from './titleForm';
import { createGlobalStyle } from 'styled-components';
const FormStyle = createGlobalStyle`
`;

const Form = ({
  titleForm,
  children,
  onSubmit,
  note,
  info
}) => <Fragment>
        <FormStyle />
        <form onSubmit={onSubmit}>
          <TitleForm title={titleForm} note={note}/>
          { children }
          { info && <div className="text-center"><small className="muted">{info}</small></div> }
        </form>
      </Fragment>
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default Form;
