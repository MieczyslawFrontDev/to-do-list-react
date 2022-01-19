import styled from "styled-components";

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid lightgray;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  background-color: ${({ theme }) => theme.color.white};
  font-weight: bold;
`;
