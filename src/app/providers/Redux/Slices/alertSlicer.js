import {createSlice} from "@reduxjs/toolkit";


const initialState = {
   showAlert:false
};

const alertSlicer = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setAlert(state,action) {
            state.showAlert = action.payload
        }
    },
});

export const { setAlert } = alertSlicer.actions;

export default alertSlicer.reducer;
