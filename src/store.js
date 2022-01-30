import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/taskSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);