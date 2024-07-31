import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    singInStart: (state) => {
      state.loading = true;
    },
    singInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    singInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    uploadeUserStart: (state) => {
      state.loading = true;
    },
    uploadeUserSussecss: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    uploadeUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  uploadeUserStart,
  uploadeUserSussecss,
  uploadeUserFailure,
  singInStart,
  singInSuccess,
  singInFailure,
} = userSlice.actions;

export default userSlice.reducer;
