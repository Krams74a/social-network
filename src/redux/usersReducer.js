import {usersAPI} from "../api/api"
import {updateObjectInArray} from "../utils/objects-helpers";

const ADD_FRIEND = "users/ADD-FRIEND"
const REMOVE_FRIEND = "users/REMOVE-FRIEND"
const SET_USERS = "users/SET-USERS"
const SET_USERS_TOTAL_COUNT = "users/SET-USERS-TOTAL-COUNT"
const SET_CURRENT_PAGE = "users/SET-CURRENT-PAGE"
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING"
const TOGGLE_FOLLOWING_PROGRESS = "users/TOGGLE-FOLLOWING-PROGRESS"

let initialState = {
    usersInfo: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                usersInfo: updateObjectInArray(state.usersInfo, action.userId, "id", {followed: true})
            }
        case REMOVE_FRIEND:
            return {
                ...state,
                usersInfo: updateObjectInArray(state.usersInfo, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                usersInfo: [...action.users]
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => ({type: ADD_FRIEND, userId: userId})
export const unfollowSuccess = (userId) => ({type: REMOVE_FRIEND, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, users: users})
export const setUsersTotalCount = (usersCount) => ({type: SET_USERS_TOTAL_COUNT, usersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (pageNumber, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))
    let data = await usersAPI.getUsers(pageNumber, pageSize)
    dispatch(setUsers(data.items))
    dispatch(toggleIsFetching(false))
}

export const getTotalUsersCountFromAPI = () => async (dispatch) => {
    let data = await usersAPI.getTotalUsersCount()
    dispatch(setUsersTotalCount(data.totalCount))
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.followToUser.bind(usersAPI)

    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    let apiMethod = usersAPI.unfollowToUser.bind(usersAPI)

    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
}

export default usersReducer;
