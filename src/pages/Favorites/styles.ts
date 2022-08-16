import styled from "styled-components";

import { NavLink } from "react-router-dom";

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
  capitalize: true;
  color: var(--primary);
  margin: 12px;
  @media (min-width: 768px) {
    margin: 15px 0;
  }
`;

export const Main = styled.main`
  margin: 12px;
  @media (min-width: 768px) {
    display: grid;
    margin: 12px;
  }
`;

export const EmptyFavorite = styled.div`
  font-size: 15px;
  line-height: 15px;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--primary);
  margin: 12px;
  @media (min-width: 768px) {
    margin: 15px 0;
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

export const MovieListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem auto;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;
