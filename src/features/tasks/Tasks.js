import React from "react";
import Wrapper from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";

function Tasks() {
  return (
    <Wrapper>
      <Header />
      <>
        <Section body={<Form />} />
        <Section 
          headerContent={<Buttons />} 
          body={<TaskList />} 
        />
      </>
    </Wrapper>
  );
}

export default Tasks;
