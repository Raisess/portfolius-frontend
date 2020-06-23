import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// components
import TopBarComponent from '../components/topBar.component';
import Footer from '../components/footer.component';
import ProjectBox from '../components/projectBox.component';

// services
import { getAll } from '../services/project.service';

const Grid = styled.div`
  display: grid;
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 60px;
  grid-gap: 2em;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  padding-top: 35px;
`;

const Projects = ({ logged, userData }) => {
  const [projects, setProjects] = useState(false);

  useEffect(() => {
    getAll('boi12345').then(data => setProjects(data));
  }, []);

  return (
    <div className="projects">
      <TopBarComponent logged={logged} userData={userData} />
      <Title>Meus Projetos</Title>
      <Grid>
        {
          (() => {
            if (projects) {
              const project = projects.map(project_ => <ProjectBox project={project_} />);

              return project;
            }

            return;
          })()
        }
      </Grid>
      <Footer />
    </div>
  );
};

export default Projects;