import "./style.css";

const Form = ({ title }) => (
  <form className="form">
    <input
      type="text"
      className="form__field"
      placeholder="Co jest do zrobienia?"
    />
    <button className="form__button">{title}</button>
  </form>
);

export default Form;
