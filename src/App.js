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
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (newTaskContent) => {
   setTasks(tasks => [
     ...tasks,
     {
       content: newTaskContent,
       done: false,
       id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1
     }
   ])
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form title="Dodaj zadanie" addNewTask={addNewTask} />}
        />
        <Section
          title="Lista zadań"
          headerContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
        />
      </>
    </Container>
  );
}

export default App;
