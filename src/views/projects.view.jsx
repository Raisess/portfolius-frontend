import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import TopBarComponent from '../components/topBar.component';
import Footer from '../components/footer.component';
import ProjectBox from '../components/projectBox.component';
import Button from '../components/env/button.component';

// services
import { getAll } from '../services/project.service';

const Grid = styled.div`
  display: ${props => props.display};
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

const Text = styled.h1`
  padding-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Projects = ({ logged, userData }) => {
  const [projects, setProjects] = useState(false);
  const [display, setDisplay] = useState('');

  useEffect(() => {
    if (localStorage.getItem('logged') === 'true') {
      getAll(localStorage.getItem('username'))
        .then(data => setProjects(data));
      setDisplay('grid');
    }
  }, []);

  return (
    <div className="projects">
      <TopBarComponent logged={logged} userData={userData} />
      <Title>Meus Projetos</Title>
      <Grid display={display}>
        {
          (() => {
            if (localStorage.getItem('logged') === 'true') {
              if (projects) {
                const project = projects.map(project_ => <ProjectBox project={project_} />);

                return project;
              }

              return;
            }

            return (
              <div style={{ textAlign: 'center' }}>
                <Text>Você precisa estar logado para ver seus projetos...</Text>
                <StyledLink to="/login">
                  <Button width="200px" text="Fazer login" callback={() => ''} />
                </StyledLink>
              </div>
            );
          })()
        }
      </Grid>
      <Footer />
    </div>
  );
};

export default Projects;