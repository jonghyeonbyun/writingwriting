import React from "react";
import styled from "styled-components";
import InstaLogo from "assets/images/insta.png";

const Content = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Text = styled.span`
  font-family: "MapoFlowerIsland";
  font-weight: 800;
  font-size: 28px;
`;
const SubText = styled.span`
  font-family: "MapoFlowerIsland";
  font-weight: 300;
  font-size: 17px;
  line-height: 2;
`;
const Logo = styled.div`
  width: 300px;
  background-image: url(${InstaLogo});
  background-size: cover;
  height: 300px;
`;
const Vote = () => (
  <Content>
    <a href="https://www.instagram.com/just_hanmadi/" target="_blank">
      <Logo />
    </a>
    <Text>인스타 좋아요로 투표하기</Text>
    <SubText>한마디 인스타 계정으로 넘어갑니다.</SubText>
  </Content>
);
export default Vote;
