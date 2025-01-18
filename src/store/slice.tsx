import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FetchingData from "./createasyncawait";

// type initialStatee = {
//     data:number[],
//     status:'idle' | 'loading' | 'loaded' | 'failed',
//     error:string | undefined
// }
// const a = {a:''}
// const initialState:initialStatee = {
//     data:[],
//     status:'idle',
//     error:undefined
// }
// const cerateslice = createSlice({
//     name:"",
//     initialState,
//     reducers:{},
//     extraReducers(builder) {
//         builder.addCase(FetchingData.pending,(state)=>{
//             state.status = 'loading'
//         })
//         builder.addCase(FetchingData.pending,(state,action:number)=>{
//             state.status = 'loaded'
//             state.data = action.payload
            
//         })
//     },

// })