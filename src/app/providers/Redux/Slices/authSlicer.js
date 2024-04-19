import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    auth: false,
    token:'',
    loading: false,
    error: null
};

const authSlicer = createSlice({
    name: "authSlicer",
    initialState,
    reducers: {
        // Здесь могут быть другие редукторы, если необходимо
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(authenticateUser.pending, (state) => {
    //             state.loading = true;
    //             state.error = null;
    //         })
    //         .addCase(authenticateUser.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.auth = true;
    //             state.token = action.payload.token; // Предполагается, что возвращенные данные содержат токен
    //         })
    //         .addCase(authenticateUser.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload ? action.payload.message : 'Authentication failed'; // Если есть данные об ошибке, используйте их. В противном случае, установите сообщение об ошибке по умолчанию.
    //         });
    // },
});

export default authSlicer.reducer;
