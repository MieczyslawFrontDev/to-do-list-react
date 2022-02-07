import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  axiosExampleTasks,
  selectLoading,
} from "../../features/tasks/taskSlice";
import { StyledButton } from "../../features/tasks/Buttons/styled";

const Button = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <StyledButton
      onClick={() => dispatch(axiosExampleTasks())}
      disabled={loading}
    >
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </StyledButton>
  );
};

export default Button;
