<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-05-04 11:01:38
 * @FilePath: \simple-backend-manager-system\src\views\UserList.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <div class="user-list-wrapper">
    <input v-model="searchKeyword" placeholder="Search users..." />
    <div>
      <input v-model="newName" placeholder="Name" />
      <button @click="handleAddUser">添加用户</button>
    </div>
    <el-table :data="pagingUsers" border style="width: 100%">
      <el-table-column prop="id" label="Id" />
      <el-table-column prop="name" label="Name" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="default" @click="handleRemoveUser(scope.row.id)">
            删除用户
          </el-button>
          <el-button type="primary" size="default" @click="handleEditUser(scope.row)">
            编辑用户
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination-control v-model:totalItems="filteredUsers.length" v-model:dataSource="filteredUsers"
      v-model:pageSize="pageSize" @page-changed="handlePageChanged" />
    <edit-dialog v-model:visible="dialogVisible" v-model:formData="editUser" @submit="handleSubmitEdit">
    </edit-dialog>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { getUsers, type User } from "../mock/data.ts"
import PaginationControl from '@/components/PaginationControl.vue';
const dialogVisible = ref(false)
const users = ref<User[]>([])
const searchKeyword = ref("");
const newName = ref("")
const filteredUsers = ref<User[]>([])
const pagingUsers = ref<User[]>([])
const editUser = ref<User>({})
const pageSize = ref(5)
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
const handleEditUser = (row: { id: number; name: string; }) => {
  editUser.value.id = row.id
  editUser.value.name = row.name
  dialogVisible.value = true
}
const handleSubmitEdit = (formData) => {
  console.log(formData);
  if (formData.name == "") {
    ElMessage("用户名不能为空")
    return;
  }
  users.value.forEach(user => {
    if (user.id == formData.id) {
      user.name = formData.name
    }
  })
  dialogVisible.value = false;
}
const handlePageChanged = (newDataSource: Array<any>, currrentPage: number) => {
  pagingUsers.value = newDataSource
}
onMounted(async () => {
  const result = await getUsers() as User[];
  users.value = result;
  filteredUsers.value = users.value;
  handlePageChanged(filteredUsers.value.slice(0, pageSize.value), 1);
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
