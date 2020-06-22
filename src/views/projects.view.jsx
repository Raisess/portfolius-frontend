import React from 'react';

// components
import TopBarComponent from '../components/topBar.component';
import Footer from '../components/footer.component';

// services
import { getAll } from '../services/project.service';

const Projects = ({ logged, userData }) => {
  getAll('boi12345').then(data => console.log(data));

  return (
    <div className="projects">
      <TopBarComponent logged={logged} userData={userData} />
      <h1>Projects</h1>
      <Footer />
    </div>
  );
};

export default Projects;