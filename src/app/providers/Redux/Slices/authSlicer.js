import {createSlice} from "@reduxjs/toolkit";
import {REGISTER_ASYNC, LOGIN_ASYNC} from "../actions/actions";


const initialState = {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null
};

const authSlicer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        removeTokenFromLS:(state , action)=>{
            state.token = null
            localStorage.removeItem(action.payload);

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(REGISTER_ASYNC.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.loading = true;
            })
            .addCase(REGISTER_ASYNC.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload)
            })
            .addCase(REGISTER_ASYNC.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Authentication failed';
            })
            .addCase(LOGIN_ASYNC.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(LOGIN_ASYNC.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload)

            })
            .addCase(LOGIN_ASYNC.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.message : 'Authentication failed';
            });
    },
});
export const { removeTokenFromLS} =authSlicer.actions
export default authSlicer.reducer;
