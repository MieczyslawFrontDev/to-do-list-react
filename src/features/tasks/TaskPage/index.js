import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../taskSlice";

export default () => {
const { id } = useParams();
const task = useSelector(state => getTaskById(state, id))

    return (
        <Wrapper>
          <Header title={"Szczegóły zadania"} />
            <Section
              title={
                task 
                ? task.content 
                : "Nie znaleziona zadania"}
              body={task 
                ? <><strong>Ukończone: </strong>{task.done ? "Tak" : "Nie"}</> 
                : ""} 
            />
        </Wrapper>
    )
}