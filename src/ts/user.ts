/*
 * @Date: 2025-04-13 23:19:24
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 23:20:30
 * @FilePath: \myvue\src\ts\user.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */

import { defineStore } from "pinia";

// user.ts
export const useUserStore = defineStore('user', {
    state: () => ({
        name: 'Tom',
        age: 18
    }),
    getters: {
        isAdult: (state) => state.age >= 18
    },
    actions: {
        growUP() {
            this.age++
        }
    }
})