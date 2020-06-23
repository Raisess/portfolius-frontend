import React from 'react';
import styled from 'styled-components';

// assets
import mainImg from '../assets/man_and_code.svg';

// components
import TopBarComponent from '../components/topBar.component';
import Footer from '../components/footer.component';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.h1`
  font-size: 40px;
  word-wrap: wrap;
  padding-top: 50px;
  padding-right: 30px;
`

const Img = styled.img`
  width: 400px;
  height: 400px;
`;

const Home = ({ logged, userData }) => {
  return (
    <div className="home">
      <TopBarComponent logged={logged} userData={userData} />
      <Container>
        <Text>Encontre programadores e web designers perfeitos para o seu projeto.</Text>
        <Img src={mainImg} alt="main-img" />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;