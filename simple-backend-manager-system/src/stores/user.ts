import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        username: "",
        password: "",
        islogin: false,
        isRegister: false
    }),
    getters: {
        getUserName: (state) => {
            return state.username
        },
        getPassword: (state) => {
            return state.password
        }
    },
    actions: {
        setUserName(username) {
            this.username = username
        },
        setPassword(password) {
            this.password = password
        },
        setLogin(isLogin) {
            this.islogin = isLogin
        },
        setRegister(isRegister) {
            this.isRegister = isRegister
        }
    }
})