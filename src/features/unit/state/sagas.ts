import { all, call, put, takeLatest } from "redux-saga/effects";
import { getTest } from "../services";
import { fetchTest, fetchTestFail, fetchTestSuccess } from "./reducer";

export function* fetchTestWorker() {
  try {
    const test: string = yield call(getTest);

    yield put(fetchTestSuccess(test));
  } catch {
    yield put(fetchTestFail());
  }
}

export default function* unitSagas() {
  yield all([takeLatest(fetchTest, fetchTestWorker)]);
}
