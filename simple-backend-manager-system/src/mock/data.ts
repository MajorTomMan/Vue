/*
 * @Date: 2025-04-27 23:33:45
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-28 00:00:53
 * @FilePath: \Vue\simple-backend-manager-system\src\mock\data.ts
 * @Description: MajorTomMan @版权声明 保留文件所有权利
 */
export interface User {
  id: number
  name: string
}
export function getUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    // 模拟网络请求的延迟，比如1秒后返回
    setTimeout(() => {
      const users: User[] = [
        { id: 1, name: 'Annabelle' },
        { id: 2, name: 'Annette' },
        { id: 3, name: 'Annie' },
        { id: 4, name: 'Annmarie' },
        { id: 5, name: 'Bobbie' },
        { id: 6, name: 'Bobby' },
        { id: 7, name: 'Bobert' },
        { id: 8, name: 'Bobina' },
        { id: 9, name: 'Chris' },
        { id: 10, name: 'Christina' },
        { id: 11, name: 'Christian' },
        { id: 12, name: 'Christopher' },
        { id: 13, name: 'Dan' },
        { id: 14, name: 'Daniel' },
        { id: 15, name: 'Danielle' },
        { id: 16, name: 'Dani' },
        { id: 17, name: 'Ellie' },
        { id: 18, name: 'Ella' },
        { id: 19, name: 'Ellen' },
        { id: 20, name: 'Elly' },
        { id: 21, name: 'Frank' },
        { id: 22, name: 'Frankie' },
        { id: 23, name: 'Francis' },
        { id: 24, name: 'Franco' },
        { id: 25, name: 'Greg' },
        { id: 26, name: 'Gregory' },
        { id: 27, name: 'Greta' },
        { id: 28, name: 'Gretchen' },
        { id: 29, name: 'Henry' },
        { id: 30, name: 'Henrietta' },
        { id: 31, name: 'Hendrick' },
        { id: 32, name: 'Hensley' },
        { id: 33, name: 'Isaac' },
        { id: 34, name: 'Isabelle' },
        { id: 35, name: 'Isadora' },
        { id: 36, name: 'Ismael' },
        { id: 37, name: 'Jack' },
        { id: 38, name: 'Jackson' },
        { id: 39, name: 'Jackie' },
        { id: 40, name: 'Jacques' },
        { id: 41, name: 'Kara' },
        { id: 42, name: 'Karen' },
        { id: 43, name: 'Karly' },
        { id: 44, name: 'Kaitlyn' },
        { id: 45, name: 'Leo' },
        { id: 46, name: 'Leonard' },
        { id: 47, name: 'Leon' },
        { id: 48, name: 'Leona' },
        { id: 49, name: 'Mandy' },
        { id: 50, name: 'Manda' },
      ]
      resolve(users) // 成功时返回数据
    }, 1000)
  })
}

export function getRoles() {
  return new Promise((resolve, reject) => {
    // 模拟网络请求的延迟，比如1秒后返回
    setTimeout(() => {
      const users = [
        { id: 1, role: 'Editor' },
        { id: 2, role: 'User' },
        { id: 3, role: 'Admin' },
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
