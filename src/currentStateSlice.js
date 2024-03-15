import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stateNow: [],
};

const currentStateSlice = createSlice({
  name: "currentState",
  initialState,
  reducers: {
    currentStateOfTab: (state, action) => {
      state.stateNow.push(action.payload);
    },
  },
});

export const { currentStateOfTab } = currentStateSlice.actions;

export default currentStateSlice.reducer;
