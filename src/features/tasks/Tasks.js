import React, { useState } from "react";
import Wrapper from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import { useTasks} from "../../useTasks";

function Tasks() {

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
            <TaskList
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

export default Tasks;
