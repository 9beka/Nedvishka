import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {ADS_GET_OWNERS_API, ADS_POST_API, LOGIN_API, REGISTER_API} from "../../../../shared/config/api/api";
export const REGISTER_ASYNC = createAsyncThunk(
    'auth/REGISTER_ASYNC',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(REGISTER_API, userData)
            if (response.data.token) {
                return response.data.token
            }

        } catch (e) {
            return rejectWithValue(e.message)
        }
    },
)

export const LOGIN_ASYNC = createAsyncThunk(
    'auth/LOGIN_ASYNC',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post(LOGIN_API, userData)
            if (response.data.token) {
                return response.data.token
            }

        } catch (e) {
            return rejectWithValue(e.message)
        }
    },
)


export const ADS_POST_ASYNC = createAsyncThunk(
    'ads/ADS_POST_ASYNC',
    async (adsData, { rejectWithValue,getState  }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.post(ADS_POST_API, adsData,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    },
)

export const ADS_GET_OWNERS_ASYNC = createAsyncThunk(
    'ads/ADS_GET_OWNERS_ASYNC',
    async (_, { rejectWithValue,getState  }) => {
        try {
            const token = getState().auth.token;
            const response = await axios.get(ADS_GET_OWNERS_API,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    },
)