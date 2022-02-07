import { useState, useRef } from "react";
import { StyledForm, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Input } from "../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }
    dispatch(
      addTask({
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
        placeholder="Co jest do zrobienia?"
        />
        <Button>Dodaj zadanie</Button>
      </StyledForm>
  );
};

export default Form;
