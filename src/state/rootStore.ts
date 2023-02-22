import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import unitState from "../features/example/state/reducer";
import { rootSaga } from "./rootSaga";

const reducersMap = {
  unitState,
};

export const createConfigureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: combineReducers(reducersMap),
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);
  return store;
};

const store = createConfigureStore();

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
