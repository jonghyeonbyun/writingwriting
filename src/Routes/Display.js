import React from "react";
import styled from "styled-components";
import Calli from "Components/Calli";
import Mu1 from "assets/images/mu1.png";
import Mu2 from "assets/images/mu2.png";
import Mu3 from "assets/images/mu3.png";
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1px);
  background-color: rgba(0, 0, 0, 0.01);
  border-radius: 10px;
  margin-bottom: 30px;
`;
const Title = styled.span`
  font-family: "MapoFlowerIsland";
  font-weight: 800;
  font-size: 28px;
  padding: 10px;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: -20px;
  @media only screen and (max-width: 600px) {
    font-size: 17px;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: -10px;
  }
`;
const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Display = () => (
  <>
    <Section>
      <Title>세트 1 - 텀블러, 스티커</Title>
      <Content>
        <Calli bgImg={Mu1} /> <Calli bgImg={Mu2} /> <Calli bgImg={Mu3} />
      </Content>
    </Section>{" "}
    <Section>
      <Title>세트 2 - 스티커</Title>
      <Content>
        <Calli bgImg={Mu2} /> <Calli bgImg={Mu3} />
      </Content>
    </Section>
  </>
);

export default Display;
