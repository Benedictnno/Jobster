import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {} from "react-redux";
import customUrl from "../../utils/axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserfromLocalStorage,
  removeUserfromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserfromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      const reps = await customUrl.post("/auth/register", user);
      return reps.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const reps = await customUrl.post("/auth/login", user);
      return reps.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },

    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserfromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Hello ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { toggleSidebar,logoutUser } = userSlice.actions;
export default userSlice.reducer;
