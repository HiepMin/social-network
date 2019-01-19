import React from 'react';
import styled from 'styled-components';
import Avatar from './../../components/Avatar';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .name {
    margin: 10px 0 3px;
    color: blue;
    text-align: center;
    strong {
      font-size: 1.4rem;
    }
  }
`;
export default user => 
  <Wrapper>
    <Avatar 
      width="7rem"
      height="7rem"
      src={user.avatar} 
      alt={user.username} 
    />
    <div className="name">
      <strong>{user.username}</strong>
    </div>
  </Wrapper>


