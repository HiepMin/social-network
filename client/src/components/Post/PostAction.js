import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 5px;
  right: 10px;
  margin: 0;
  display: flex;
  .btnAction{
      box-shadow: none;
      font-size: 11px;
      width: 30px;
      height: 30px;
  }
`
const PostAction = ({ children }) => 
  <Wrapper>
    {children}
  </Wrapper>

export default PostAction;