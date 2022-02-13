import {messagesAPI} from "../api/api"

const ADD_MESSAGE = 'messages/ADD-MESSAGE'
const SET_DIALOGS = 'messages/SET-DIALOGS'
const SET_MESSAGES = 'messages/SET-MESSAGES'
const SET_CURRENT_DIALOG = 'messages/SET_CURRENT_DIALOG'
const DELETE_MESSAGE = 'messages/DELETE_MESSAGE'

let initialState = {
    messages: [],
    dialogs: [],
    currentDialogId: 0
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: action.newMessageId,
                body: action.newMessageText,
                photo: "https://vk.com/images/camera_200.png",
                senderName: "Krams"
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        case SET_CURRENT_DIALOG:
            return {
                ...state,
                currentDialogId: action.dialogId
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((message) => message.id !== action.messageId)
            }
        default:
            return state;
    }
}

export const addMessage = (newMessageText, newMessageId) => ({type: ADD_MESSAGE, newMessageText, newMessageId})
export const setDialogs = (dialogs) => ({type: SET_DIALOGS, dialogs})
export const setMessages = (messages) => ({type: SET_MESSAGES, messages})
export const setCurrentDialogId = (dialogId) => ({type: SET_CURRENT_DIALOG, dialogId})
export const removeMessage = (messageId) => ({type: DELETE_MESSAGE, messageId})

export const getDialogs = () => async (dispatch) => {
    let response = await messagesAPI.getDialogs()

    dispatch(setDialogs(response.data))
}

export const getMessages = (userId) => async (dispatch) => {
    let response = await messagesAPI.getMessagesList(userId)

    dispatch(setMessages(response.data.items))
}

export const sendMessage = (userId, messageText) => async (dispatch) => {
    let response = await messagesAPI.sendMessage(userId, messageText)

    dispatch(addMessage(response.data.data.message.body, response.data.data.message.id))
}

export const deleteMessage = (messageId) => async (dispatch) => {
    await messagesAPI.deleteMessage(messageId)

    dispatch(removeMessage(messageId))
}

export default messagesReducer;
