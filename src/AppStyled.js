import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;

  &.active {
    font-weight: bold;
  }
`;
export const Navigation = styled.nav`
  background-color: teal;
`;
export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
export const Item = styled.li`
  list-style: none;
  margin: 20px;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
