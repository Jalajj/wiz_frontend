import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getAuthStatus  = createAsyncThunk('auth/status',async (dispatch) => {
    return await axios.get("/api/profile")    
})


const authSlice = createSlice({
    name:'auth',
    initialState: {
        auth:null
    },
    extraReducers:{
        [getAuthStatus.pending] : (state) => {
            state.auth = null
        },
        [getAuthStatus.fulfilled] : (state, action) => {
            state.auth = action.payload        
        },
        [getAuthStatus.rejected] : (state) => {           
            state.auth = false        
        }
    }
})

export default authSlice.reducer;