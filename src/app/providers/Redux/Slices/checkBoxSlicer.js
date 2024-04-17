import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const checkBoxAsync = createAsyncThunk (
   "checbox/checkBoxSlicer" , 
   async(arrayOfDate, {rejectWithValue , dispatch})=>{
    console.log(arrayOfDate , "FROM checkBoxSlicer");
   }
)
const initialState = {
   districts: [null],
   artmentComplex: [null],
 };

 const checkBoxSlicer = createSlice ({
   name:"" ,
   initialState,
 })
 export default rangePriceSlicer.reducer;