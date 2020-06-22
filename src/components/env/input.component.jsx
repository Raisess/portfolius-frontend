import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 5px;
  height: 25px;
  font-size: 18px;
  border: solid;
  border-radius: 5px;
  border-color: #333;
  border-width: 2px;
  color: #333;
`;

const InputComponent = ({ id, placeholder, type }) => (
  <Input id={id} placeholder={placeholder} type={type} />
);

export default InputComponent;