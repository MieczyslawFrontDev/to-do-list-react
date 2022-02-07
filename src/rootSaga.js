import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/TasksSaga";

export function* rootSaga(){
    yield all([
        tasksSaga(),
    ])
}