import {authAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "auth/SET-USER-DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const authMe = () => async (dispatch) => {
    let data = await authAPI.authMe()

    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setUserData(id, email, login, true))
    }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.loginUser(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(authMe())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Ошибка"
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logoutUser = () => async (dispatch) => {
    let data = await authAPI.logoutUser()

    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer;
