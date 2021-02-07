import React from "react";
import styled from "styled-components";

const Order = styled.iframe`
  margin-top: 30px;
  display: block;
  border: none;
  height: 1030px;
  width: 100vw;
  font-family: "MapoFlowerIsland";
`;
const Store = () => (
  <>
    <Order src="https://docs.google.com/forms/d/e/1FAIpQLSd8ogYiwFFw9othsE7jHw9vMdJC0O8wuKJ6cPXcnV7WhHM3ag/viewform?embedded=true">
      로드 중…
    </Order>
  </>
);

export default Store;
