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
    <el-table :loading="loading" :data="newUsers" border style="width: 100%">
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

    <el-button-group class="pagination-control">
      <el-button type="primary" size="default" @click="requestPreviousPage">上一页</el-button>
      <el-button type="primary" disabled>第{{ currentPage }}页</el-button>
      <el-button type="primary" size="default" @click="requestNextPage">下一页</el-button>
    </el-button-group>

  </div>

</template>
<script setup lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue';
import { getUsers, type User } from "../mock/data.ts"

const loading = ref(false);
const users = ref<User[]>([])
const searchKeyword = ref("");
const newUsers = ref<User[]>([])
const newName = ref("")
const pageSize = 5;
let currentPage = ref(1);
let start = 0;
let end = start + pageSize;
const filteredUsers = computed(() => {
  if (!searchKeyword.value) {
    return users.value;
  }
  return users.value.filter((user) =>
    user.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});
watchEffect(() => {
  currentPage.value = 1;
  start = 0;
  end = pageSize;
  newUsers.value = filteredUsers.value.slice(start, end);
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
