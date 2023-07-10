import React from "react";
import Nav from "./Nav";
import adsImage from "../images/ads.png";
import adsImage2 from "../images/ads2.png";
import adsImage3 from "../images/ads3.png";
import styled from "styled-components";
import { Button } from "../styles/Share";

const FlexDiv = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0 20px;
  align-items: center;
`;

const Flex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <Nav />
      <FlexDiv>
        <Flex>
          <h1>Brighter Myanmar</h1>
          <h5 style={{ marginTop: "10px" }}>
            Professional Computer Programming Class
          </h5>
          <Button>Download Apk</Button>
        </Flex>
        <Flex>
          <img src={adsImage} alt="ads" width="70%" />
        </Flex>
      </FlexDiv>

      <FlexDiv>
        <Flex>
          <img src={adsImage2} alt="ads" width="70%" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            dicta laudantium, officiis corrupti fugiat necessitatibus
            consequatur soluta debitis, corporis possimus ut libero. Laudantium
            dignissimos et earum blanditiis praesentium tenetur consequatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            dicta laudantium, officiis corrupti fugiat necessitatibus.
          </p>
        </Flex>
      </FlexDiv>

      <FlexDiv>
        <Flex>
          <img src={adsImage3} alt="ads" width="70%" />
        </Flex>
        <Flex>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            dicta laudantium, officiis corrupti fugiat necessitatibus
            consequatur soluta debitis, corporis possimus ut libero. Laudantium
            dignissimos et earum blanditiis praesentium tenetur consequatur.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
            dicta laudantium, officiis corrupti fugiat necessitatibus
            consequatur soluta debitis, corporis possimus ut libero.
          </p>
        </Flex>
      </FlexDiv>
    </>
  );
}
