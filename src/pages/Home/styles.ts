import styled from "styled-components";

import { NavLink } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  height: 8rem;

  background-color: var(--black-10);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
  }

  img {
    width: 200px;
  }

  @media (min-width: 768px) {
    nav {
      padding: 2rem 12rem;
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: 2%;
  font-weight: 500;
  color: var(--primary);
  &:hover {
    color: var(--primary);
  }
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  line-height: 23px;
  color: var(--primary);
  margin: 12px;
  @media (min-width: 768px) {
    margin: 15px 0;
  }
`;

export const Home = styled.main`
  @media (min-width: 768px) {
    display: grid;
    gap: 2.4rem;
    margin: 61px 121px;
  }
`;

export const Main = styled.main`
  margin: 12px;
  @media (min-width: 768px) {
    display: grid;
    margin: 12px;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  grid-template-columns: repeat(2, auto);

  li {
    list-style-type: none;
    margin: 12px;
  }

  @media (max-width: 1024px) {
    display: grid;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`;

export const NavigationButton = styled.button<{ disabled: boolean }>`
  width: 15rem;
  height: 3.6rem;
  border: 0;
  border-radius: 8px;
  background-color: var(--primary);
  font-family: "Arial", sans-serif;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  color: var(--white);
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  &:hover {
    filter: brightness(0.8);
  }
`;
