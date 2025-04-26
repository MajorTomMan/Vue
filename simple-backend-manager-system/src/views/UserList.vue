<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-26 20:55:46
 * @FilePath: \simple-backend-manager-system\src\views\UserList.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
    <div class="user-list-wrapper">
        <input v-model="searchKeyword" placeholder="Search users..." @input="filterUsers" />
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
])
const searchKeyword = ref("");
const newUsers = ref([])
watchEffect(() => {
    if (searchKeyword.value == '') {
        newUsers.value = users.value;
    } else {
        newUsers.value = users.value.filter((user) => {
            return user.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
        })
    }
})
const handleRemoveUser = (id) => {
    let index = 0;
    for (let i = 0; i < users.value.length; i++) {
        const user = users.value[i]
        if (user.id == id) {
            index = i;
        }
    }
    users.value.splice(index, 1)
}

</script>