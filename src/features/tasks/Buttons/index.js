import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectAreTasksToDo,
  selectHideDone,
} from "../taskSlice";
import { Wrapper, StyledButton } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const areTasksToDo = useSelector(selectAreTasksToDo);
  const dispatch = useDispatch();

  return (
    
    <Wrapper>

      {areTasksToDo && (
        <>   
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </StyledButton>
          <StyledButton
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
