import request from "@/utils/requests";
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
        setUserName(username: string) {
            this.username = username
        },
        setPassword(password: string) {
            this.password = password
        },
        setLogin(isLogin: boolean) {
            this.islogin = isLogin
        },
        setRegister(isRegister: boolean) {
            this.isRegister = isRegister
        }
    }
})

export const fetchUsers = () => {
    return request.get("https://jsonplaceholder.typicode.com/users")
}