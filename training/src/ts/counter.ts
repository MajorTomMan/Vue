/*
 * @Date: 2025-04-13 21:11:06
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-13 21:11:14
 * @FilePath: \myvue\src\ts\counter.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++
        }
    }
})