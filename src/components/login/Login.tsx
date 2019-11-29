import React, { CSSProperties, FC } from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px;
  border: 1px solid #999;
  padding: 2px;
  box-shadow: #09d3ac;
`;

const Button = styled.button`
  font-family: Verdana,serif;
  font-size: 24px;
  border: #999 2px solid;
  border-radius: 2px;
`;

interface LoginProps {
  onLoginSuccess: (username: string) => void;
}

export const Login: FC<LoginProps> = ({ onLoginSuccess }) => {

  const doLogin = () => {
    onLoginSuccess('Pepe');
  };

  return <div>
    <Form>
      <Input name="email" placeholder="email"/>
      <Input name="password" type="password" placeholder="password"/>
      <Button onClick={doLogin}>Enviar</Button>
    </Form>
  </div>
};
