
/*
 * @Date: 2025-04-27 23:33:45
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-28 00:00:53
 * @FilePath: \Vue\simple-backend-manager-system\src\mock\data.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */

import type { Role } from "@/stores/role";
import request from "@/utils/requests"
import type { AxiosResponse } from "axios"

export async function getUsers(): Promise<AxiosResponse<any, any>> {
  return await request.get<Record<string, any>[]>("https://jsonplaceholder.typicode.com/users");
}


export function getRoles() {
  return new Promise((resolve, reject) => {
    // 模拟网络请求的延迟，比如1秒后返回
    setTimeout(() => {
      const users: Role[] = [
        { id: 1, role: 'Admin' },
        { id: 2, role: 'User' },
        { id: 3, role: 'Editor' },
      ]
      resolve(users) // 成功时返回数据
    }, 1000)
  })
}
export function getPermissions() {
  return new Promise((resolve, reject) => {
    // 模拟网络请求的延迟，比如1秒后返回
    setTimeout(() => {
      const users = [
        { id: 1, permission: 'root' },
        { id: 2, permission: 'normal' },
      ]
      resolve(users) // 成功时返回数据
    }, 1000)
  })
}
