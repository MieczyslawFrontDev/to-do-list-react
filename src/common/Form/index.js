import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../features/tasks/tasksSlice";
import { StyledForm, Button } from "./styled";
import { Input } from "../../common/Input";
import { useLocation } from "react-router-dom";
import { addProduct } from "../../features/shopping/productsSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const location = useLocation();
  const routePath = location.pathname;
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }
    dispatch(
      routePath === "/zadania"
        ? addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
          })
        : addProduct({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
          })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        placeholder={
          routePath === "/zadania"
            ? "Co jest do zrobienia?"
            : "Co jest do kupienia?"
        }
      />
      <Button>
        {routePath === "/zadania" ? "Dodaj zadanie" : "Dodaj produkt"}
      </Button>
    </StyledForm>
  );
};

export default Form;
