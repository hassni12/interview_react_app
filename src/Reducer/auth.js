import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiHandler } from "./api/apiHandler";
import { toast } from "react-toastify";

export const LoginThunk = createAsyncThunk("login_Thunk", async (data2) => {
  try {
    const res = await ApiHandler().post(`/login`, data2);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});

export const RegisterUser = createAsyncThunk("register", async (data) => {
  try {
    const res = await ApiHandler().post("/signup", data);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});

export const GetAttendance = createAsyncThunk("user_profile", async () => {
  try {
    const res = await ApiHandler().get("/test");
    console.log(res.data);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});
const authSlice = createSlice({
  name: "auth_slice",
  initialState: {
    loading: false,
    error: "",
    get_attendance_loading: false,
    attendanceData: [],
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },

  extraReducers: {
    [LoginThunk.pending]: (state, action) => {
      state.loading = true;
    },

    [LoginThunk.fulfilled]: (state, action) => {
      console.log(action.payload.error);
      if (action?.payload?.error) {
        state.error = action?.payload?.error;
        toast.error(action?.payload?.error);
      } else {
        state.token = action?.payload["access_token"];
        localStorage.setItem("token", action?.payload["access_token"]);
        toast.success("Successfully Login ");
        state.loading = false;
      }
    },
    [LoginThunk.rejected]: (state, action) => {
      state.loading = false;
    },
    [RegisterUser.fulfilled]: (state, action) => {
      console.log(action.payload, "payload");
      if (action.payload) {
        toast.success("User Register Successfully");
      } else {
        toast.error(action?.payload?.error);
      }
    },
    [RegisterUser.pending]: (state, action) => {
      state.loading = true;
    },
    [GetAttendance.pending]: (state, action) => {
      state.get_attendance_loading = true;
    },
    [GetAttendance.fulfilled]: (state, action) => {
      state.get_attendance_loading = false;
      state.attendanceData = action.payload;
    },
  },
});

export default authSlice.reducer;
