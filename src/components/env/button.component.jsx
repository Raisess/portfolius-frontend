import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #2a9134;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    transition: 0.5s;
    background-color: #7db582;
  }
`;

const SmallButton = ({ callback, text }) => {
  return (
    <Button onClick={() => callback()}>{text}</Button>
  );
}

export default SmallButton;