import React from 'react';
import styled from 'styled-components';

// components
import TopBar from '../components/topBar.component';
import Footer from '../components/footer.component';

const Main = styled.div`
  width: 60vw;
  height: 450px;
  background-color: transparent;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

const Text = styled.h1`
  padding-top: 22vh;
  font-size: 60px;
`;

const NoMatch = () => (
  <div className="404">
    <TopBar />
    <Main>
      <Text>
        <span role="img" aria-label="Flushed Face">😳</span> Error 404 not found!
      </Text>
      <h1>O que você está tentando encontrar cara?!</h1>
    </Main>
    <Footer />
  </div>
);

export default NoMatch;