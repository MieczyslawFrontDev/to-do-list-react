import React, { useState } from "react";
import Wrapper from "./Container";
import Header from "./Container/Header";
import Section from "./Container/Section";
import Form from "./Container/Section/Form";
import Tasks from "./Container/Section/Tasks";
import Buttons from "./Container/Section/Buttons";
import { useTasks} from "./useTasks";

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <Wrapper>
      <Header title="Lista zadań" />
      <>
        <Section
          title="Dodaj nowe zadanie"
          body={<Form addNewTask={addNewTask} />}
        />
        <Section
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
    </Wrapper>
  );
}

export default App;
