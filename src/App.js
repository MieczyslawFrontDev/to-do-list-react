import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import "./index.css";

const tasks = [
  { id: 1, content: "Zrobić szkolenie YouCode", done: true },
  { id: 2, content: "Zostać programistą JS", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />
      <>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form title="Dodaj zadanie" />}
        />
        <Section
          title="Lista zadań"
          headerContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTask} />}
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTask} />}
        />
      </>
    </Container>
  );
}

export default App;
