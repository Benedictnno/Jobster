import customUrl from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const reps = await customUrl.post(url, user);
    return reps.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};


export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/login", user);
    return resp?.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.msg);
  }
};


export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const reps = await customUrl.patch(url, user, {
      headers: {
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        // Authorization: `Bearer `,
      },
    });
    return reps.data;
  } catch (error) {
    if (error.response.status === 401) {
      toast.error("Unauthorized! Logging Out...");
      setTimeout(() => thunkAPI.dispatch(logoutUser()), 4000);
      return thunkAPI.rejectWithValue(error.response.date.msg);
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
