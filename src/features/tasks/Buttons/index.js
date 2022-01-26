import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectAreTasksToDo,
  selectHideDone,
} from "../taskSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksToDo = useSelector(selectAreTasksToDo);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {areTasksToDo && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
