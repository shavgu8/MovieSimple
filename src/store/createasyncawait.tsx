import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../axios";

const FetchingData = createAsyncThunk('fetchingdata/data',async (_,thunkapi)=>{
    try {
        const res = await api.get('/3/movie/6/videos')
        return await res.data
    } catch (error) {
        if(error instanceof Error){
            thunkapi.rejectWithValue('FAILED')
        }else if(error === 'string'){
            thunkapi.rejectWithValue('FAILED')
        }else{
            thunkapi.rejectWithValue('FAILED')
        }
    }
})
export default FetchingData