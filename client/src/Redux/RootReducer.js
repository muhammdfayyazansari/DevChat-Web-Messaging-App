import usersSlice from "./Slices/UserSlice";
import { combineReducers } from "@reduxjs/toolkit";



const RootReducer = combineReducers({
  userSlice: usersSlice,
})



export default RootReducer;