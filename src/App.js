import React, { useState } from "react";
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

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

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
          headerContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
          body={<Tasks tasks={tasks} hideDone={hideDone} />}
        />
      </>
    </Container>
  );
}

export default App;
