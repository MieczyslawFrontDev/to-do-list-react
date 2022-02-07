import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.color.white};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
    
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px;
  font-weight: bold;
`;

export const Body = styled.div`
padding: 20px;
`


