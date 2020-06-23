import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 200px;
  height: 180px;
  background-color: #aaa;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 65%;
`;

const SubBox = styled.div`
  background-color: ${props => props.bg || 'red'};
  width: 100%;
  height: 40%;
  color: #eee;
  margin-top: -5px;
`;

const Username = styled.span`
  font-size: 12px;
  padding-right: 10px;
`;

const ProjectName = styled.h3`
  padding-right: 10px;
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