import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;


export const Button = styled.button`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.5s;
    filter: brightness(120%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(140%);
  }
`;
