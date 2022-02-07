import React from "react";
import Button from "../../../common/Button";
import Wrapper from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "../Form";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import Search from "../Search";


function TasksPage() {

  return (
    <Wrapper>
      <Header title="Lista zadań" />
      <>
        <Section
          title="Dodaj nowe zadanie"
          button={<Button />}
          body={<Form />} 
        />
        <Section
          title="Wyszukiwarka" 
          body={<Search />} 
        />
        <Section 
          title="Lista zadań"
          headerContent={<Buttons />} 
          body={<TaskList />} 
        />
      </>
    </Wrapper>
  );
}

export default TasksPage;
