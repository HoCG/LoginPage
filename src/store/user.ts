import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { login } from '../apis/user';
import { setCookie } from '../apis/cookie';

type userInfo = {
  userId: string,
  password: string
}

const asyncLoginFetch = createAsyncThunk(
  'counterSlice/asyncLoginFetch',
  async (userInfo: userInfo) => {
    let user = {};
    await login(userInfo.userId, userInfo.password).then((res) => {
      user = res.data;
      //setCookie(res.headers.access)
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
    })
  }
})

export { asyncLoginFetch }
export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;