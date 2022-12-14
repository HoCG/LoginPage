import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, join, logout } from '../apis/user';

type userInfo = {
  id: number,
  email: string,
  nick: string,
  password: string
}

const asyncLoginFetch = createAsyncThunk(
  'counterSlice/asyncLoginFetch',
  async (userInfo: userInfo) => {
    await login(userInfo.email, userInfo.password).then((res) => {
      userInfo = res.data;
    })
    return userInfo;
  }
)

const asyncJoinFetch = createAsyncThunk(
  'counterSlice/asyncJoinFetch',
  async (userInfo: userInfo) => {
    await join(userInfo.email, userInfo.nick, userInfo.password).then((res) => {
      userInfo = res.data;
    })
    return userInfo;
  }
)

const asyncLogoutFetch = createAsyncThunk(
  'counterSlice/asyncLogoutFetch',
  async () => {
    await logout();
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      id: NaN,
      email: ``,
      nick: ``,
      password: ``
    } as userInfo
  },
  reducers: {
    resetUser: (state) => {
      state.user.email = '';
      state.user.id = NaN;
      state.user.nick = '';
      state.user.password = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoginFetch.pending, (state, action) => {});
    builder.addCase(asyncLoginFetch.fulfilled, (state, { payload })=>{
      Object.assign(state.user, payload)
    });
    builder.addCase(asyncJoinFetch.pending, (state, action) => {});
    builder.addCase(asyncJoinFetch.fulfilled, (state, action)=>{});
    builder.addCase(asyncLogoutFetch.pending, (state, action) => {});
    builder.addCase(asyncLogoutFetch.fulfilled, (state, action)=>{
      resetUser();
    });
  }
})

export { asyncLoginFetch, asyncJoinFetch }
export const { resetUser } = userSlice.actions;

export default userSlice.reducer;