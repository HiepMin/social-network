import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Wrapper = styled.div`
  width: auto;
  text-align: ${props => props.align ? props.align : 'left'};
  margin-bottom: 1rem;
`;
const Button = styled.button`
  border-radius: ${props => props.iconButton ? '50%' : '999px' };;
  background: ${
    props => 
      props.disabled ? '#e4e4e46b' : 'transparent'
  };
  box-shadow: 0 0 1px 2px #0000002e;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border: ${
    props => 
      props['is-actived'] ? '2px solid #0000ff54' : 'none'};
  transition: .2s all linear;
  color: ${
    props => 
      props.default ? '#898989' 
      : props.disabled ? '#707070'
      : props['is-actived'] ? '#0000ff8c'
      : '#000' };
  width: ${
    props => 
      props.iconButton ? '35px' : 
      props.width ? props.width :
      '100%' };
  height: ${
    props => 
      props.iconButton ? '35px' :
      props.height ? props.height :
      '100%' };
  display: ${props => props.iconButton ? 'flex' : 'inline-block' };
  justify-content: ${props => props.iconButton && props.justifyContent ? props.justifyContent : 'center' };
  align-items: ${props => props.iconButton && props.alignItems ? props.alignItems : 'center' };
  font-weight: ${props => props['is-actived'] ? 'bold' : 'normal'}
  :hover {
    background: ${
      props => 
        props.default ? '#ddd' 
        : props.disabled ? 'transparent'
        : ''
    };
  }

`
const RenderButton = ({style, ...props}) => (
  <Wrapper style={style}>
    <Button {...props} >
      {props.children}
    </Button>
  </Wrapper>
)
RenderButton.propTypes = {
  style: PropTypes.object,
}
export default RenderButton;
