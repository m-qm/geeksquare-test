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

export const Container = styled.div`
  width: 185px;

  img {
    height: 255px;
    width: 185px;
    border-radius: 1px;
  }

  > div {
    margin: 0.8rem 0;
  }

  @media (min-width: 768px) {
    img {
      height: 255px;
      width: 185px;
      border-radius: 1px;
    }
  }
`;

export const Favorite = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 1px;
  cursor: pointer;
`;
export const Description = styled.p`
  font-size: 15px;
  line-height: 15px;
  color: var(--primary);
  margin: 12px 0;
`;

export const FavoriteButton = styled.button`
  width: 185px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  border: 1px solid var(--primary);
  background-color: var(--primary);
  cursor: pointer;
  color: white;
  padding: 12px;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const FavoriteSelectedButton = styled.button`
  width: 185px;
  font-size: 1.6rem;
  line-height: 2.4rem;
  padding: 12px;
  font-weight: 500;
  border: 1px solid var(--warning);
  background-color: var(--warning);
  color: var(--white);
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const DescriptionCategory = styled.p`
  font-size: 15px;
  line-height: 15px;
  color: var(--warning);
  margin: 12px 0 6px 0;
`;
