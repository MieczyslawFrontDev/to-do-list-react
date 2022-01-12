import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 0.5s;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;
