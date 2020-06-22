import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 5px;
  font-size: '19px';
  border: solid;
  border-radius: 5px;
  border-color: #442954;
  border-width: 2px;
  color: #442954;
`;

const InputComponent = ({ id, placeholder, type }) => (
  <Input id={id} placeholder={placeholder} type={type} />
);

export default InputComponent;