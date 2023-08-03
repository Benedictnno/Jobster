import axios from "axios";
import { getUserfromLocalStorage } from "./localStorage";
import { clearStore } from "../features/user/userSlice";

const customUrl = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customUrl.interceptors.request.use(
  (config) => {
    const user = getUserfromLocalStorage();
    if (user) {
      config.headers["Authorization"] = `Bearer ${user.token}`;
      // in the latest version "common" returns undefined
      // config.headers.common['Authorization'] = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    setTimeout(() => thunkAPI.dispatch(clearStore()), 4000);

    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};
export default customUrl;
