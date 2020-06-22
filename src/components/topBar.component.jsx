import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SmallButton from './env/button.component';

const TopBar = styled.div`
  top: 0;
  width: 100vw;
  height: 60px;
  background-color: #442954;
  /* box-shadow: 0 0 5px #2b2747; */
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  margin-left: 30px;
  padding-top: 5px;
  color: #fff;
  cursor: pointer;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 17px;
`

const RowItem = styled.h3`
  color: #ddd;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    color: #fff;
    transition: 0.5s;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CustomRow = styled(Row)`
  position: absolute;
  right: 30px;
  padding-top: 10px;
`;

const TopBarComponent = () => (
  <TopBar>
    <StyledLink to="/">
      <Title>Portfolius</Title>
    </StyledLink>
    <Row>
      <StyledLink to="/">
        <RowItem>Home</RowItem>
      </StyledLink>
      <StyledLink to="/explore">
        <RowItem>Explorar</RowItem>
      </StyledLink>
      <StyledLink to="/projects">
        <RowItem>Meus projetos</RowItem>
      </StyledLink>
    </Row>
    <CustomRow>
      <SmallButton
        text="Entrar"
        callback={() => window.location.href = '/login'}
      />
      <SmallButton
        text="Cadastro"
        callback={() => window.location.href = '/create'}
      />
    </CustomRow>
  </TopBar>
);

export default TopBarComponent;