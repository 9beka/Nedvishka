export const API = process.env.REACT_APP_API_BACK;
export const AUTH_API = API + "auth/";

export const ADS_API = API + "cards/";

export const FAVORITE_API = API + "favorite/";

export const REGISTER_API = AUTH_API + "register";

export const LOGIN_API = AUTH_API + "login";

export const ADS_POST_API = ADS_API + "post";
export const ADS_GET_API = ADS_API + "get";

export const ADS_GET_OWNERS_API = ADS_API + "getOwners";
export const ADS_DELETE_OWNERS_API = ADS_API + "delete/";

export const GET_PROFILE_API = AUTH_API + "get/user";

export const UPDATE_IMAGE_PROFILE_API = AUTH_API + "update/user-image";

export const DELETE_IMAGE_PROFILE_API = AUTH_API + "delete/user-image";

export const ADD_FAVORITE_API = FAVORITE_API + "toggle-favorite/";

export const GET_FAVORITE_API = FAVORITE_API + "get-favorites";

export const CARD_DETAIL_GET_API = ADS_API + "getDetails/"