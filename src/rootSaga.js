import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/sagaTasks";

export function* rootSaga(){
    yield all([
        tasksSaga(),
    ])
}