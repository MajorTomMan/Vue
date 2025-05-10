import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export interface User {
    id: number;
    username: string;
    password: string;
    isLogin: boolean;
}

export const useUserStore = defineStore("user", () => {
    const users = ref<User[]>([]);
    const addUser = (user: Ref<User>) => {
        if (users.value.length > 0) {
            user.value.id = users.value.length
            users.value.push(user.value)
        }
        else {
            user.value.id = 1
            users.value.push(user.value)
        }
    }
    const queryUser = (username: string) => {
        return users.value.find(user => {
            return user.username == username
        })
    }
    // Getters
    const getUser = (id: number): User | undefined => {
        return users.value.find(user => user.id === id);
    };
    const getPassword = (id: number): string | undefined => {
        return getUser(id)?.password;
    };
    const getUserName = (id: number): string | undefined => {
        return getUser(id)?.username;
    };
    const getIsLogin = (id: number): boolean | undefined => {
        return getUser(id)?.isLogin;
    };

    // Setters
    const setUser = (id: number, user: User) => {
        const index = users.value.findIndex(u => u.id === id);
        if (index !== -1) {
            users.value[index] = user;
        } else {
            users.value.push(user);
        }
    };
    const setPassword = (id: number, password: string) => {
        const user = getUser(id);
        if (user) user.password = password;
    };
    const setUserName = (id: number, username: string) => {
        const user = getUser(id);
        if (user) user.username = username;
    };
    const setIsLogin = (id: number, isLogin: boolean) => {
        const user = getUser(id);
        if (user) user.isLogin = isLogin;
    };

    return {
        users,
        addUser,
        queryUser,
        getUser,
        getPassword,
        getUserName,
        getIsLogin,
        setUser,
        setPassword,
        setUserName,
        setIsLogin
    };
});
