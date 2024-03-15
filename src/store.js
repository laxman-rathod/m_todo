import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import currentStateSlice from "./currentStateSlice";

export default configureStore({
  reducer: {
    todos: todoSlice,
    currentState: currentStateSlice,
  },
});
