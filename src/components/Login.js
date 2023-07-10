import React, { useRef } from "react";
import Nav from "./Nav";
import { styled } from "styled-components";
import { Button } from "../styles/Share";
import {
  loggedIn,
  setLoggedIn,
  useLoginContext,
} from "../store/LoginContentApi";
import { useNavigate } from "react-router-dom";

const SectionDiv = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  width: 500px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
`;

const InputStyle = styled.input`
  display: block;
  width: 250px;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 2px;

  &:focus {
    outline: 1px solid #ddd;
  }
`;

const H2_style = styled.h2`
  margin: 20px 0;
  color: #ff8800;
`;
export default function Login() {
  const navigate = useNavigate();
  const { setLoggedIn } = useLoginContext();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const login = (e) => {
    e.preventDefault();
    let user = {
      phone: phoneRef.current.value,
      password: passwordRef.current.value,
    };

    phoneRef.current.value = "";
    passwordRef.current.value = "";

    setLoggedIn(true);
    navigate("/home");
  };
  return (
    <>
      <Nav />
      <SectionDiv>
        <H2_style>Login To View Home Page</H2_style>
        <form onSubmit={login}>
          <InputStyle type="tel" placeholder="phone" ref={phoneRef} />
          <InputStyle
            type="password"
            placeholder="password"
            ref={passwordRef}
          />
          <Button type="submit">Login</Button>
        </form>
      </SectionDiv>
    </>
  );
}
