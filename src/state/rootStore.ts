import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import unitState from "../features/unit/state/reducer";
import { rootSaga } from "./rootSaga";

const reducersMap = {
  unitState,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers(reducersMap),
  middleware: [sagaMiddleware, logger],
});

sagaMiddleware.run(rootSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
