import { createSlice } from "@reduxjs/toolkit";

const initialUsers = [
  { id: 0, email: "hello@naver.com", password: "hi1234", username: "두두" },
];

const initialState = {
  user: null,
  authed: false,
  dataList: initialUsers,
};

let nextId = initialUsers.reduce((max, user) => Math.max(max, user.id), -1) + 1;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const email = action.payload.email?.trim().toLowerCase();
      const password = action.payload.password?.trim();
      const matchedUser = state.dataList.find((item) => item.email === email);

      if (!matchedUser || matchedUser.password !== password) {
        alert("일치하는 정보가 없습니다");
        state.user = null;
        state.authed = false;
        return;
      }

      state.user = matchedUser;
      state.authed = true;
    },
    logout: (state) => {
      state.user = null;
      state.authed = false;
    },
    signup: (state, action) => {
      state.dataList = [
        ...state.dataList,
        {
          id: nextId++,
          ...action.payload,
        },
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, signup } = authSlice.actions;

export default authSlice.reducer;
