import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocaleStorage } from "./tasksFromLocaleStorage";
import { axiosExampleTasks, selectTasks, setTasks } from "./taskSlice";

function* axiosExampleTasksWorker() {
  try {
    yield delay(1000)
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(error, alert, "coś poszło nie tak");
  }
}

function* saveTasksInLocaleStorageWorker(){
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocaleStorage, tasks)
}


export function* tasksSaga() {
  yield takeLatest(axiosExampleTasks.type, axiosExampleTasksWorker);
  yield takeEvery("*", saveTasksInLocaleStorageWorker)
}


