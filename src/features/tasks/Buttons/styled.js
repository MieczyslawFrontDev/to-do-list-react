import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;  
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin-right: 0;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  transition: 0.5s;
  padding: 20px;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
   padding: 10px;
  }
`;
