import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 200px;
  height: 180px;
  background-color: #aaa;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 0 3px #333;
`;

const Img = styled.img`
  width: 100%;
  height: 70%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const SubBox = styled.div`
  background-color: ${props => props.bg};
  width: 100%;
  height: 30%;
  color: #eee;
  margin-top: -3.7px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Username = styled.span`
  font-size: 12px;
  padding-left: 10px;
  padding-top: 5px;
`;

const ProjectName = styled.h3`
  padding-left: 10px;
`;

const ProjectBox = ({ project }) => {
  const { name, color, cover, username } = project;

  return (
    <Box>
      <Img src={cover} alt="project-cover" />
      <SubBox bg={color}>
        <Username>{username}</Username>
        <ProjectName>{name}</ProjectName>
      </SubBox>
    </Box>
  );
}

export default ProjectBox;