import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: green;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const SmallButton = ({ callback, text }) => {
  return (
    <Button onClick={() => callback()}>{text}</Button>
  );
}

export default SmallButton;