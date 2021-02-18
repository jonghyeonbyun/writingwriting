import styled from "styled-components";

const LogoBox = styled.svg`
  height: 13vh;
  min-height: 50px;
  margin: 10px;
  @media only screen and (max-width: 600px) {
    height: 15px;
  }
`;

const Logo = () => (
  <>
    <LogoBox xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 174">
      <text
        id="글로_세상을_바꾸다"
        data-name="글로 세상을 바꾸다"
        transform="translate(1 166)"
        fill="#888"
        font-size="26"
        font-family="MapoFlowerIsland"
      >
        <tspan x="0" y="0">
          글로 세상을 바꾸다
        </tspan>
      </text>
      <g id="Group_1" data-name="Group 1">
        <text
          id="글"
          transform="translate(0 68)"
          font-size="76"
          font-family="MapoFlowerIsland"
        >
          <tspan x="0" y="0">
            글
          </tspan>
        </text>
        <text
          id="적"
          transform="translate(50 76)"
          font-size="76"
          font-family="MapoFlowerIsland"
        >
          <tspan x="0" y="0">
            적
          </tspan>
        </text>
        <text
          id="적-2"
          data-name="적"
          transform="translate(148 101)"
          font-size="76"
          font-family="MapoFlowerIsland"
        >
          <tspan x="0" y="0">
            적
          </tspan>
        </text>
        <text
          id="글-2"
          data-name="글"
          transform="translate(101 121)"
          font-size="76"
          font-family="MapoFlowerIsland"
        >
          <tspan x="0" y="0">
            글
          </tspan>
        </text>
      </g>
    </LogoBox>
  </>
);

export default Logo;
