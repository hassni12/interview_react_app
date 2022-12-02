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
    return res.data;
  } catch (error) {
    return error.response.data;
  }
});
const authSlice = createSlice({
  name: "auth_slice",
  initialState: {
    loading: false,
    get_attendance_loading:false,
    attendanceData:[],
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },

  extraReducers: {
    [LoginThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.token = action?.payload["access_token"];

      state.loading = false;
      if (action.payload) {
        localStorage.setItem("token", action?.payload["access_token"]);

        toast.success("Login Successfully");
      } else {
        state.error = action?.payload?.message;
        toast.error(action?.payload?.message);
      }
    },
    [LoginThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [RegisterUser.fulfilled]: (state, action) => {
      console.log(action.payload,"payload");
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
      state.attendanceData = action.payload.data;
    },
  },
});

export default authSlice.reducer;
