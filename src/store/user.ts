import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, join } from '../apis/user';
import { updateCookie } from '../apis/cookie';

type userInfo = {
  userEmail: string,
  password: string
}

type joinUserInfo = {
  userEmail: string,
  userNick: string,
  password: string
}

const asyncLoginFetch = createAsyncThunk(
  'counterSlice/asyncLoginFetch',
  async (userInfo: userInfo) => {
    let user = {};
    await login(userInfo.userEmail, userInfo.password).then((res) => {
      updateCookie();
      user = res.data;
    })
    return user;
  }
)

const asyncJoinFetch = createAsyncThunk(
  'counterSlice/asyncJoinFetch',
  async (userInfo: joinUserInfo) => {
    let user = {};
    await join(userInfo.userEmail, userInfo.userNick, userInfo.password).then((res) => {
      return res.data;
    })
    return user;
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoginFetch.pending, (state, action) => {})
    builder.addCase(asyncLoginFetch.fulfilled, (state, action)=>{
      state.user = action.payload;
      console.log(state.user);
    })
    builder.addCase(asyncJoinFetch.pending, (state, action) => {})
    builder.addCase(asyncJoinFetch.fulfilled, (state, action)=>{
      state.user = action.payload;
    })
  }
})

export { asyncLoginFetch, asyncJoinFetch }
export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;