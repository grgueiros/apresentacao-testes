import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateProps = {
  canEdit: boolean;
  dialogOpened: boolean;
  alreadyChanged: boolean;
  isFetching: boolean;
  value: number;
  status: "success" | "failed" | "loading" | "ready";
};

const initialState: StateProps = {
  status: "loading",
  canEdit: false,
  dialogOpened: false,
  alreadyChanged: false,
  isFetching: false,
  value: 3,
};

const name = "@test/unit";

export const fetchCanEdit = createAction<void>(`${name}/fetchTest`);

const unitSlice = createSlice({
  initialState,
  name: "@test/unit",
  reducers: {
    toggleDialog: (state) => ({
      ...state,
      dialogOpened: !state.dialogOpened,
    }),
    canEditSuccess: (state) => ({
      ...state,
      canEdit: true,
      status: "ready",
    }),
    canEditFail: (state) => ({
      ...state,
      canEdit: false,
      status: "ready",
    }),
    changeMovie: (state, action: PayloadAction<number>) => ({
      ...state,
      isFetching: true,
      value: action.payload,
    }),
    changeFail: (state) => ({
      ...state,
      status: "failed",
    }),
    changeSuccess: (state) => ({
      ...state,
      status: "success",
    }),
    verifyCanChangeWithNotMonthly: (state) => state,
    verifyCanChangeWithUnpaidMonth: (state) => state,
    verifyCanChangeAlreadyChanged: (state) => ({
      ...state,
      canEdit: true,
      status: "ready",
      alreadyChanged: true,
    }),
  },
});

export const {
  canEditSuccess,
  canEditFail,
  toggleDialog,
  changeMovie,
  changeFail,
  changeSuccess,
  verifyCanChangeAlreadyChanged,
  verifyCanChangeWithNotMonthly,
  verifyCanChangeWithUnpaidMonth,
} = unitSlice.actions;

export default unitSlice.reducer;
