<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-27 22:55:11
 * @FilePath: \Vue\simple-backend-manager-system\src\views\UserList.vue
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
    <el-table :data="newUsers" border style="width: 100%">
      <el-table-column prop="id" label="Id" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="role" label="Role" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="default" @click="handleRemoveUser(scope.row.id)">
            删除用户
          </el-button>
        </template>

      </el-table-column>

    </el-table>

    <el-button-group class="pagination-control">
      <el-button type="primary" size="default" @click="requestPreviousPage">上一页</el-button>
      <el-button type="primary" disabled>第{{ currentPage }}页</el-button>
      <el-button type="primary" size="default" @click="requestNextPage">下一页</el-button>
    </el-button-group>

  </div>

</template>
<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
const users = ref([
  { id: 1, name: 'Annabelle', role: 'Admin' },
  { id: 2, name: 'Annette', role: 'User' },
  { id: 3, name: 'Annie', role: 'Editor' },
  { id: 4, name: 'Annmarie', role: 'User' },
  { id: 5, name: 'Bobbie', role: 'Admin' },
  { id: 6, name: 'Bobby', role: 'User' },
  { id: 7, name: 'Bobert', role: 'Editor' },
  { id: 8, name: 'Bobina', role: 'User' },
  { id: 9, name: 'Chris', role: 'Admin' },
  { id: 10, name: 'Christina', role: 'User' },
  { id: 11, name: 'Christian', role: 'Editor' },
  { id: 12, name: 'Christopher', role: 'User' },
  { id: 13, name: 'Dan', role: 'Admin' },
  { id: 14, name: 'Daniel', role: 'User' },
  { id: 15, name: 'Danielle', role: 'Editor' },
  { id: 16, name: 'Dani', role: 'User' },
  { id: 17, name: 'Ellie', role: 'Admin' },
  { id: 18, name: 'Ella', role: 'User' },
  { id: 19, name: 'Ellen', role: 'Editor' },
  { id: 20, name: 'Elly', role: 'User' },
  { id: 21, name: 'Frank', role: 'Admin' },
  { id: 22, name: 'Frankie', role: 'User' },
  { id: 23, name: 'Francis', role: 'Editor' },
  { id: 24, name: 'Franco', role: 'User' },
  { id: 25, name: 'Greg', role: 'Admin' },
  { id: 26, name: 'Gregory', role: 'User' },
  { id: 27, name: 'Greta', role: 'Editor' },
  { id: 28, name: 'Gretchen', role: 'User' },
  { id: 29, name: 'Henry', role: 'Admin' },
  { id: 30, name: 'Henrietta', role: 'User' },
  { id: 31, name: 'Hendrick', role: 'Editor' },
  { id: 32, name: 'Hensley', role: 'User' },
  { id: 33, name: 'Isaac', role: 'Admin' },
  { id: 34, name: 'Isabelle', role: 'User' },
  { id: 35, name: 'Isadora', role: 'Editor' },
  { id: 36, name: 'Ismael', role: 'User' },
  { id: 37, name: 'Jack', role: 'Admin' },
  { id: 38, name: 'Jackson', role: 'User' },
  { id: 39, name: 'Jackie', role: 'Editor' },
  { id: 40, name: 'Jacques', role: 'User' },
  { id: 41, name: 'Kara', role: 'Admin' },
  { id: 42, name: 'Karen', role: 'User' },
  { id: 43, name: 'Karly', role: 'Editor' },
  { id: 44, name: 'Kaitlyn', role: 'User' },
  { id: 45, name: 'Leo', role: 'Admin' },
  { id: 46, name: 'Leonard', role: 'User' },
  { id: 47, name: 'Leon', role: 'Editor' },
  { id: 48, name: 'Leona', role: 'User' },
  { id: 49, name: 'Mandy', role: 'Admin' },
  { id: 50, name: 'Manda', role: 'User' },
])

const searchKeyword = ref("");
const newUsers = ref([])
const newName = ref("")
const newRole = ref("")
const pageSize = 5;
let currentPage = ref(1);
let start = 0;
let end = start + pageSize;
const filteredUsers = computed(() => {
  if (!searchKeyword.value) {
    return users.value;
  }
  return users.value.filter((user) =>
    user.role.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});
watchEffect(() => {
  currentPage.value = 1;
  start = 0;
  end = pageSize;
  newUsers.value = filteredUsers.value.slice(start, end);
});
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
  newUsers.value = filteredUsers.value.slice(start, end);
}
const handleRemoveUser = (id: number) => {
  if (users.value.length == 0) {
    return;
  }
  const index = users.value.findIndex(user => user.id === id);
  if (index !== -1) {
    users.value.splice(index, 1);
  }
  newUsers.value = filteredUsers.value.slice(start, end);
}
const requestNextPage = () => {
  if (currentPage.value * pageSize >= filteredUsers.value.length) {
    console.log("已经到最后一页,不能再往后了");
    return;
  }
  currentPage.value += 1;
  start = (currentPage.value - 1) * pageSize;
  end = start + pageSize;
  newUsers.value = filteredUsers.value.slice(start, end);
}
const requestPreviousPage = () => {
  if (currentPage.value === 1) {
    console.log("已经到第一页,不能再往前了");
    return;
  }
  currentPage.value -= 1;
  start = (currentPage.value - 1) * pageSize;
  end = start + pageSize;
  newUsers.value = filteredUsers.value.slice(start, end);
}
</script>

<style lang="css" scoped>
.pagination-control {
  display: flex;
  align-items: center;
  /* 垂直居中 */
  gap: 10px;
  /* 按钮和文字之间留点空隙，可选 */
}
</style>
