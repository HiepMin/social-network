import React  from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import LoadingIndicator from './../LoadingIndicator';
const Wrapper = styled.div`
  width: ${props => props.width ? props.width : '35px'};
  height: ${props => props.height ? props.height : '35px'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;
  margin-right: 10px;
  img {
    max-width: 100%;
  }
`;

const Avatar = ({
  src,
  alt,
  height,
  width
}) => (
  <Wrapper width={width} height={height}>
    <img src={src} alt={alt}/>
  </Wrapper>
);
Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

export default Avatar;

