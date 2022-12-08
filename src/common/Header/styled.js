import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
  }
`;
