import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import JobSlice from "./features/jobs/JobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: JobSlice,
  },
});
