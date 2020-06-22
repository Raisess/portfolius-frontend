import React from 'react';

// components
import TopBarComponent from '../components/topBar.component';
import Footer from '../components/footer.component';

const Home = ({ logged }) => {
  return (
    <div className="home">
      <TopBarComponent logged={logged} />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}

export default Home;