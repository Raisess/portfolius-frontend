import React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/env/button.component';
import Input from '../components/env/input.component';

// services
import { login } from '../services/user.service';

const Container = styled.div`
  width: 300px;
  height: 300px;
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


const Login = () => {
  return (
    <div className="login">
      <h1
        style={{
          textAlign: 'center',
          marginTop: '10vh',
          paddingBottom: '30px',
          fontSize: '40px'
        }}
      >
        Portfolius
      </h1>
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
            callback={() => {
              const username = document.getElementById('username').value;
              const password = document.getElementById('password').value

              login({
                username: username,
                password: password
              })
                .then(token => {
                  localStorage.setItem('apiKey', token);
                  localStorage.setItem('username', username);
                  localStorage.setItem('password', password);
                  localStorage.setItem('logged', true);

                  return window.location.href = '/';
                });
            }}
          />
        </SubContainer>
      </Container>
    </div>
  );
}

export default Login;