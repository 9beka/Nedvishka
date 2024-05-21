import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ADS_GET_OWNERS_API,
  ADS_POST_API,
  LOGIN_API,
  REGISTER_API,
  ADS_DELETE_OWNERS_API,
  ADS_GET_API,
  GET_PROFILE_API,
} from "../../../../shared/config/api/api";
export const REGISTER_ASYNC = createAsyncThunk(
  "auth/REGISTER_ASYNC",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(REGISTER_API, userData);
      if (response.data.token) {
        return response.data.token;
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const LOGIN_ASYNC = createAsyncThunk(
  "auth/LOGIN_ASYNC",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(LOGIN_API, userData);
      if (response.data.token) {
        return response.data.token;
      }
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const ADS_POST_ASYNC = createAsyncThunk(
  "ads/ADS_POST_ASYNC",
  async (formData, { rejectWithValue, getState }) => {
    console.log(formData);
    try {
      const token = getState().auth.token;
      const response = await axios.post(ADS_POST_API, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const ADS_GET_OWNERS_ASYNC = createAsyncThunk(
  "ads/ADS_GET_OWNERS_ASYNC",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.get(ADS_GET_OWNERS_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const ADS_DELETE_ASYNC = createAsyncThunk(
  "ads/ADS_DELETE_ASYNC",
  async ({ id, userId, card_Id }, { rejectWithValue, dispatch, getState }) => {
    try {
      const token = getState().auth.token;
      const response = await axios.delete(`${ADS_DELETE_OWNERS_API}${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { userId, card_Id },
      });
      dispatch(ADS_GET_OWNERS_ASYNC());
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
export const ADS_GET_CARTS_ASYNC = createAsyncThunk(
  "ads/ADS_GET_CARTS_ASYNC" ,
  async(_, {rejectWithValue, dispatch}) =>{
    try {
      const response = await axios.get(ADS_GET_API)
      console.log(response.data.card);
      return response.data.card
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)
export const GET_CONVERTER = createAsyncThunk(
  "ads/GET_CONVERTER",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://data.fx.kg/api/v1/average/", {
        headers: {
          Authorization: `Bearer dXd10y0PxmwtCUswnG1ehB27uv7hSGeujw02saUfc43d7102`,
        },
      });
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const GET_PROFILE = createAsyncThunk(
  "profile/GET_PROFILE",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.get(GET_PROFILE_API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
