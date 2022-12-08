import { all } from "redux-saga/effects";
import { productsSaga } from "./features/shopping/productsSaga";
import { tasksSaga } from "./features/tasks/tasksSaga";

export function* rootSaga() {
  yield all([tasksSaga(), productsSaga()]);
}
