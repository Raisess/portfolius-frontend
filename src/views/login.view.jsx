import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// components
import Button from '../components/env/button.component';
import Input from '../components/env/input.component';

// services
import { login } from '../services/user.service';

const Container = styled.div`
  width: 300px;
  height: 290px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px #333;
  margin-left: auto;
  margin-right: auto;
`;

const SubContainer = styled.div`
  background-color: transparent;
  margin-top: 0;
  text-align: center;
`;

const Title = styled.h1`
  width: 190px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  padding-bottom: 30px;
  font-size: 40px;
  cursor: pointer;
`;

const SubText = styled.p`
  font-size: 15px;
  text-align: center;
  padding-top: 20px;
`;

const Span = styled.span`
  color: orange;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #222;
`;

const Login = () => {
  return (
    <div className="login">
      <Title>
        <StyledLink to="/">Portfolius</StyledLink>
      </Title>
      <Container>
        <h1
          style={{
            textAlign: 'center',
            paddingTop: '30px',
            paddingBottom: '20px'
          }}
        >
          Login
        </h1>
        <SubContainer>
          <div className="input" style={{ paddingBottom: '10px' }}>
            <Input id="username" placeholder="Nome de usuário" type="text" />
          </div>
          <div className="input" style={{ paddingBottom: '20px' }}>
            <Input id="password" placeholder="Senha" type="password" />
          </div>
          <Button
            text="Fazer login"
            style={{ marginLeft: '0' }}
            bg="#442954"
            bgHover="#473652"
            callback={() => {
              const username = document.getElementById('username').value;
              const password = document.getElementById('password').value

              login({
                username: username,
                password: password
              })
                .then(token => {
                  if (token) {
                    localStorage.setItem('apiKey', token);
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                    localStorage.setItem('logged', true);

                    return window.location.href = '/';
                  }

                  return false;
                });
            }}
          />
        </SubContainer>
      </Container>
      <SubText>
        Ainda não tem uma conta crie <Span><Link to="/">aqui</Link></Span>.
      </SubText>
    </div>
  );
}

export default Login;