import React from "react";
import Calli from "Components/Calli";
import styled from "styled-components";
import Calli1 from "assets/images/calli1.png";
import Calli2 from "assets/images/calli2.png";
import Calli3 from "assets/images/calli3.png";
const ArtWall = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Text = styled.div`
  font-family: "MapoFlowerIsland";
  font-weight: 300;
  font-size: 28px;
  line-height: 1.5;
`;
const TextBox = styled.div`
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Home = (
  <>
    <ArtWall>
      <Calli bgImg={Calli1} />
      <Calli bgImg={Calli2} />
      <Calli bgImg={Calli3} />
    </ArtWall>
    <TextBox>
      <Text>
        힘들고 지친 날, 위로의 글귀 하나는 당신에게 큰 힘이 될 지도 모릅니다.
      </Text>
      <Text>그 힘든 시간에 글적글적이 합께 하겠습니다.</Text>
    </TextBox>
  </>
);

export default () => Home;
