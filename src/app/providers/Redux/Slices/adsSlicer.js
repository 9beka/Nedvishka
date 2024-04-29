import {createSlice} from "@reduxjs/toolkit";
import {ADS_POST_ASYNC} from "../actions/actions";


const initialState = {
    loading: false,
    error: null
};

const adsSlicer = createSlice({
    name: "ads",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ADS_POST_ASYNC.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(ADS_POST_ASYNC.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(ADS_POST_ASYNC.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Card add failed';
            })
    },
});
export const {  } = adsSlicer.actions;
export default adsSlicer.reducer;
