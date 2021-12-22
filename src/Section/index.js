import "./style.css";

const Section = ({ title, body, headerContent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      {headerContent}
    </header>
    {body}
  </section>
);

export default Section;
