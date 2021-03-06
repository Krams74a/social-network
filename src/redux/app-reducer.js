import {authMe} from "./authReducer"

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"

let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializingSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe())
    promise.then(() => {
        dispatch(initializingSuccess())
    })
}

export default appReducer;
