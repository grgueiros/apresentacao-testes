import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  test: "initial state",
  failed: false,
};

const name = "@test/unit";

export const fetchTest = createAction<void>(`${name}/fetchTest`);

const unitSlice = createSlice({
  initialState,
  name: "@test/unit",
  reducers: {
    fetchTestSuccess: (state, action: PayloadAction<string>) => ({
      ...state,
      test: action.payload,
    }),
    fetchTestFail: (state) => ({
      ...state,
      failed: true,
    }),
  },
});

export const { fetchTestSuccess, fetchTestFail } = unitSlice.actions;

export default unitSlice.reducer;
