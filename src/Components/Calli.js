import styled from "styled-components";
import noImg from "assets/images/noImg.png";
import Calli2 from "assets/images/calli2.png";

const CalliImg = styled.div`
  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin: 30px;
`;

const Calli = ({ bgImg }) => (
  <>
    <CalliImg bgImg={bgImg} />
    {console.log(bgImg)}
  </>
);
export default Calli;
