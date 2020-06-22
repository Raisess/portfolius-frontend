import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.bg || "#2a9134"};
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
    transition: 0.2s;
    background-color: ${props => props.bgHover || "#7db582"};
  }
`;

const SmallButton = ({ callback, text, bg, bgHover, style }) => {
  return (
    <Button onClick={() => callback()} bg={bg} bgHover={bgHover} style={style ? style : {}}>{text}</Button>
  );
}

export default SmallButton;