import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login, join } from '../apis/user';
import { updateCookie } from '../apis/cookie';

type userInfo = {
  userEmail: string,
  userNick: string,
  password: string
}

const asyncLoginFetch = createAsyncThunk(
  'counterSlice/asyncLoginFetch',
  async (userInfo: userInfo) => {
    let user = {
      userEmail: ``,
      userNick: ``,
      password: ``
    };
    await login(userInfo.userEmail, userInfo.password).then((res) => {
      return res.data as userInfo;
    })
    return user;
  }
)

const asyncJoinFetch = createAsyncThunk(
  'counterSlice/asyncJoinFetch',
  async (userInfo: userInfo) => {
    let user = {
      userEmail: ``,
      userNick: ``,
      password: ``
    };
    await join(userInfo.userEmail, userInfo.userNick, userInfo.password).then((res) => {
      return res.data as userInfo;
    })
    return user;
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      userEmail: ``,
      userNick: ``,
      password: ``
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = {
        userEmail: ``,
        userNick: ``,
        password: ``
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(asyncLoginFetch.pending, (state, action) => {})
    builder.addCase(asyncLoginFetch.fulfilled, (state, action)=>{
      state.user = action.payload;
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