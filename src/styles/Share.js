import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: hotpink;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  margin-top: 20px;

  &:hover {
    background-color: indigo;
  }
`;
