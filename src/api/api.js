import * as axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0",
    headers: {
        "API-KEY": "8d625948-9dcf-4bd4-908a-b61b6acfe7e8"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axiosInstance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getTotalUsersCount() {
        return axiosInstance.get(`/users`)
            .then(response => {
                return response.data
            })
    },
    followToUser(userId) {
        return axiosInstance.post(`/follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollowToUser(userId) {
        return axiosInstance.delete(`/follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    authMe() {
        return axiosInstance.get(`/auth/me`)
            .then(response => {
                return response.data
            })
    },
    loginUser(email, password, rememberMe) {
        return axiosInstance.post(`/auth/login`, {email, password, rememberMe})
    },
    logoutUser() {
        return axiosInstance.post(`/auth/logout`)
            .then(response => {
                return response.data
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axiosInstance.get(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return axiosInstance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return axiosInstance.put(`/profile/status`, {status: status})
    }
}

export const messagesAPI = {
    getDialogs() {
        return axiosInstance.get(`/dialogs`)
    },
    startDialog(userId) {
        return axiosInstance.put(`/dialogs/${userId}`)
    },
    getMessagesList(userId) {
        return axiosInstance.get(`/dialogs/${userId}/messages`)
    },
    sendMessage(userId, body) {
        return axiosInstance.post(`/dialogs/${userId}/messages`, {body})
    },
    deleteMessage(messageId) {
        return axiosInstance.delete(`/dialogs/messages/${messageId}`)
    }
}
