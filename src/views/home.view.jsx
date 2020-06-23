import React from 'react';
import styled from 'styled-components';

// assets
import mainImg from '../assets/man_and_code.svg';
import blmImg from '../assets/blm.svg';

// components
import TopBarComponent from '../components/topBar.component';
import Footer from '../components/footer.component';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
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

const BlmCustomImg = styled(Img)`
  width: 200px;
  height: 200px;
`;

const CustomText = styled(Text)`
  padding-left: 30px;
  padding-right: 0;
  padding-top: 20px;
`;

const Home = ({ logged, userData }) => {
  return (
    <div className="home">
      <TopBarComponent logged={logged} userData={userData} />
      <Container>
        <BlmCustomImg src={blmImg} alt="blm-img" />
        <CustomText>Apoiar o racismo é apoiar o genocídio, respeito sempre. #BlackLivesMatter</CustomText>
      </Container>
      <Container>
        <Text>Encontre programadores e web designers perfeitos para o seu projeto.</Text>
        <Img src={mainImg} alt="main-img" />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;