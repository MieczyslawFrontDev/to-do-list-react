import { StyledSection, Header, Title, Body } from "./styled";

const Section = ({ title, button, body, headerContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {button}
      {headerContent}
    </Header>
    <Body>{body}</Body>
  </StyledSection>
);

export default Section;
