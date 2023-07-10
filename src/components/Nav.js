import React from "react";
import styled from "styled-components";
import logoImage from "../images/logo.png";
import { useLoginContext } from "../store/LoginContentApi";
import { useNavigate } from "react-router-dom";

const FlexDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 35px 30px;
  height: 45px;
  align-items: center;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.1);
`;

const LeftDiv = styled.div`
  display: flex;
  align-items: center;
`;

const RightDiv = styled.div`
  flex: 1;
`;

const UlDiv = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const H1_style = {
  marginLeft: "10px",
  color: "#ff8800",
};

const ATage_style = {
  color: "hotpink",
};

const LiDiv = styled.li`
  padding: 0 10px;
  &:after {
    content: "";
    display: block;
    height: 5px;
    background-color: hotpink;
    transform: scaleX(0);
    transition: 300ms;
  }
  &:hover {
    &:after {
      transform: scaleX(1);
    }
  }
`;
export default function Nav() {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useLoginContext();

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <FlexDiv>
      <LeftDiv>
        <img src={logoImage} width="40px" height="40px" />
        <strong style={H1_style}>brighter myanmar</strong>
      </LeftDiv>
      <RightDiv>
        <UlDiv>
          <LiDiv>
            <a href="#" style={ATage_style}>
              Download
            </a>
          </LiDiv>
          <LiDiv>
            <a href="#" onClick={logout} style={ATage_style}>
              {loggedIn ? "Logout" : "Login"}
            </a>
          </LiDiv>
        </UlDiv>
      </RightDiv>
    </FlexDiv>
  );
}
