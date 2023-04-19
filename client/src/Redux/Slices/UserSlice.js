import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
  users: []
}

const usersSlice = createSlice({
  name : "user",
  initialState, 
  reducers: {
    setUsers(state, action){
      state.users = action.payload;
    }
  }
})


export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer; 
