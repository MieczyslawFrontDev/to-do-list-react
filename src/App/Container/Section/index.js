import { Header, Title } from "./styled";

const Section = ({ body, headerContent }) => (
  <section>
    <Header>
      <Title>Lista zadań</Title>
      {headerContent}
    </Header>
    {body}
  </section>
);

export default Section;
