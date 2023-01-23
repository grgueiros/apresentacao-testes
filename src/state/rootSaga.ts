import { all } from "redux-saga/effects";
import unitSagas from "../features/unit/state/sagas";

export function* rootSaga() {
  const rootSagas = [unitSagas()];
  yield all(rootSagas);
}
