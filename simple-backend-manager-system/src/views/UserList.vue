<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-26 21:16:11
 * @FilePath: \simple-backend-manager-system\src\views\UserList.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div class="user-list-wrapper">
        <input v-model="searchKeyword" placeholder="Search users..." />
        <div>
            <input v-model="newName" placeholder="Name" />
            <input v-model="newRole" placeholder="Role" />
            <button @click="handleAddUser">添加用户</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in newUsers" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <button @click="handleRemoveUser(user.id)">删除用户</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue';
const users = ref([
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Editor' },
    { id: 4, name: 'David', role: 'User' },
    { id: 5, name: 'Eva', role: 'Admin' },
    { id: 6, name: 'Frank', role: 'User' },
    { id: 7, name: 'Grace', role: 'Editor' },
    { id: 8, name: 'Hank', role: 'User' },
    { id: 9, name: 'Ivy', role: 'Admin' },
    { id: 10, name: 'Jack', role: 'User' },
    { id: 11, name: 'Karen', role: 'Editor' },
    { id: 12, name: 'Leo', role: 'User' },
    { id: 13, name: 'Mona', role: 'Admin' },
    { id: 14, name: 'Nick', role: 'User' },
    { id: 15, name: 'Olivia', role: 'Editor' },
    { id: 16, name: 'Paul', role: 'User' },
    { id: 17, name: 'Queen', role: 'Admin' },
    { id: 18, name: 'Rick', role: 'User' },
    { id: 19, name: 'Sophia', role: 'Editor' },
    { id: 20, name: 'Tom', role: 'User' },
    { id: 21, name: 'Uma', role: 'Admin' },
    { id: 22, name: 'Victor', role: 'User' },
    { id: 23, name: 'Wendy', role: 'Editor' },
    { id: 24, name: 'Xander', role: 'User' },
    { id: 25, name: 'Yara', role: 'Admin' },
    { id: 26, name: 'Zack', role: 'User' },
    { id: 27, name: 'Amber', role: 'Editor' },
    { id: 28, name: 'Brian', role: 'User' },
    { id: 29, name: 'Cathy', role: 'Admin' },
    { id: 30, name: 'Derek', role: 'User' },
    { id: 31, name: 'Ella', role: 'Editor' },
    { id: 32, name: 'Felix', role: 'User' },
    { id: 33, name: 'Gina', role: 'Admin' },
    { id: 34, name: 'Harold', role: 'User' },
    { id: 35, name: 'Isla', role: 'Editor' },
    { id: 36, name: 'Jason', role: 'User' },
    { id: 37, name: 'Kylie', role: 'Admin' },
    { id: 38, name: 'Liam', role: 'User' },
    { id: 39, name: 'Maggie', role: 'Editor' },
    { id: 40, name: 'Nate', role: 'User' },
    { id: 41, name: 'Opal', role: 'Admin' },
    { id: 42, name: 'Peter', role: 'User' },
    { id: 43, name: 'Quinn', role: 'Editor' },
    { id: 44, name: 'Rose', role: 'User' },
    { id: 45, name: 'Steve', role: 'Admin' },
    { id: 46, name: 'Tina', role: 'User' },
    { id: 47, name: 'Ulysses', role: 'Editor' },
    { id: 48, name: 'Vera', role: 'User' },
    { id: 49, name: 'Walter', role: 'Admin' },
    { id: 50, name: 'Xena', role: 'User' },
])
const searchKeyword = ref("");
const newUsers = ref([])
const newName = ref("")
const newRole = ref("")
watchEffect(() => {
    if (searchKeyword.value == '') {
        newUsers.value = users.value;
    } else {
        newUsers.value = users.value.filter((user) => {
            return user.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
        })
    }
})
const handleAddUser = () => {
    if (newName.value == "" || newRole.value == "") {
        console.log("用户名或者角色名为空")
        return;
    }
    const user = users.value[users.value.length - 1]
    const newAddId = user.id + 1
    const newUser = {
        id: newAddId,
        name: newName.value,
        role: newRole.value
    }
    users.value.push(newUser)
    newName.value = ""
    newRole.value = ""
}
const handleRemoveUser = (id: number) => {
    if (users.value.length == 0) {
        return;
    }
    const index = users.value.findIndex(user => user.id === id);
    if (index !== -1) {
        users.value.splice(index, 1);
    }
}

</script>