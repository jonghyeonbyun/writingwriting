import React, { Component } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Logo from "Components/Logo";
const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;
const List = styled.ul`
  margin-left: 50px;
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Item = styled.li`
  width: 70%;
  height: 50px;
  text-align: center;
  border-bottom: 1.5px solid black;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.current ? "#212529" : "#ced4da")};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 20px;
  font-weight: 500;
  transition: color 0.5s ease-in-out;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Link to="/">
      <Logo />
    </Link>

    <List>
      <Item>
        <SLink to="/" current={pathname === "/"}>
          Home
        </SLink>
      </Item>
      <Item>
        <SLink to="/display" current={pathname === "/display"}>
          Display
        </SLink>
      </Item>
      <Item>
        <SLink to="/store" current={pathname === "/store"}>
          Store
        </SLink>
      </Item>
      <Item>
        <SLink to="/vote" current={pathname === "/vote"}>
          Vote
        </SLink>
      </Item>
    </List>
  </Header>
));
