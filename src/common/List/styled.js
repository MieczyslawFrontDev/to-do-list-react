import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding-top: 0;
  }
`;

export const Item = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  align-items: center;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.white};
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 2px;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
    border-radius: 2px;
    filter: brightness(120%);
    cursor: pointer;
  }

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.green};
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: teal;
`;
