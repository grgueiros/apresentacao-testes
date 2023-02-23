import { all, call, put, takeLatest } from "redux-saga/effects";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import * as actions from "./reducer";
import { changeMovie, userCanChange } from "../services";
import { ChangeError, getAxiosErrorCode } from "../utils";

const actionByErrorCode: Record<string, ActionCreatorWithoutPayload<string>> = {
  "400903": actions.verifyCanChangeWithNotMonthly,
  "400905": actions.verifyCanChangeWithUnpaidMonth,
  "45": actions.verifyCanChangeAlreadyChanged,
};
const callActionByErrorCode = (code: string) => actionByErrorCode[code]();

export function* fetchCanEditWorker() {
  try {
    yield call(userCanChange);
    yield put(actions.canEditSuccess());
  } catch (error) {
    const errorCode = getAxiosErrorCode(error as AxiosError<ChangeError>);

    if (actionByErrorCode[errorCode]) {
      yield put(callActionByErrorCode(errorCode));
    } else {
      yield put(actions.canEditFail());
    }
  }
}

export function* changeMovieWorker() {
  try {
    yield call(changeMovie);
    yield put(actions.changeSuccess());
  } catch (err) {
    yield put(actions.changeFail());
  }
}

export default function* unitSagas() {
  yield all([
    takeLatest(actions.fetchCanEdit, fetchCanEditWorker),
    takeLatest(actions.changeMovie, changeMovieWorker),
  ]);
}
