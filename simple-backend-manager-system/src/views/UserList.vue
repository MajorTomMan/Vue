<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-27 23:59:54
 * @FilePath: \Vue\simple-backend-manager-system\src\views\UserList.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <div class="user-list-wrapper">
    <input v-model="searchKeyword" placeholder="Search users..." />
    <div>
      <input v-model="newName" placeholder="Name" />
      <button @click="handleAddUser">添加用户</button>
    </div>
    <el-table :loading="loading" :data="pagingUsers" border style="width: 100%">
      <el-table-column prop="id" label="Id" />
      <el-table-column prop="name" label="Name" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="default" @click="handleRemoveUser(scope.row.id)">
            删除用户
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination-control :totalItems="filteredUsers.length" :dataSource="filteredUsers"
      @page-changed="handlePageChanged" />
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { getUsers, type User } from "../mock/data.ts"
import PaginationControl from '@/components/PaginationControl.vue';
const loading = ref(false);
const users = ref<User[]>([])
const searchKeyword = ref("");
const newName = ref("")
const filteredUsers = ref<User[]>([])
const pagingUsers = ref<User[]>([])


watchEffect(() => {
  if (!searchKeyword.value) {
    filteredUsers.value = users.value;
  } else {
    filteredUsers.value = users.value.filter((user) =>
      user.name.toLowerCase().includes(searchKeyword.value.toLowerCase()));
  }
});
const handleAddUser = () => {
  if (newName.value == "") {
    console.log("用户名或者角色名为空")
    return;
  }
  const user = users.value[users.value.length - 1]
  const newAddId = user.id + 1
  const newUser = {
    id: newAddId,
    name: newName.value,
  }
  users.value.push(newUser)
  newName.value = ""
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
const handlePageChanged = (newDataSource: Array<any>, currrentPage: number) => {
  pagingUsers.value = newDataSource
}
onMounted(async () => {
  loading.value = true;
  const result = await getUsers() as User[];
  users.value = result;
  loading.value = false;
})
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
