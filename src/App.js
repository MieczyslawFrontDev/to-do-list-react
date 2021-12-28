import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Section from "./Section";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import "./index.css";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Zrobić szkolenie YouCode", done: true },
    { id: 2, content: "Zostać programistą JS", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  }

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
          body={<Tasks 
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask} />}
        />
      </>
    </Container>
  );
}

export default App;
