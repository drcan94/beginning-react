import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import styled from "styled-components";
import Blog from "./screens/Blog";
import UserProvider from "./providers/UserProvider";
import LemonGoals from "./screens/LemonGoals";

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  font-size: 1.6rem;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #0d2240cf;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #ffffff;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const App = () => {
  return (
    <AppContainer>
      <Nav>
        <NavItem to={"/"}>
          Home
        </NavItem>
        <NavItem to={"/about"}>
          About
        </NavItem>
        <NavItem to={"/blog"}>
          Blog
        </NavItem>
        <NavItem to={"/lemongoals"}>
          Lemon Goals
        </NavItem>
      </Nav>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lemongoals" element={<LemonGoals />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/blog"
            element={
              <UserProvider>
                <Blog />
              </UserProvider>
            }
          />
        </Routes>
      </Main>
    </AppContainer>
  );
};

export default App;
