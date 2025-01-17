import  { createSlice } from "@reduxjs/toolkit";



const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
}

export const authSlice = createSlice(
  {
    name : "auth",
    initialState,
    reducers: {
      
      setLogin: ( state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      
    }
  }
)

export const { setMode , setLogin , setLogout, setFriends,  setPosts, setPost}  = authSlice.actions;
export default authSlice.reducer;