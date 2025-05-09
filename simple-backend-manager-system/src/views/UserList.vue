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
    <form-table v-model:form-data="pagingUsers" @remove-data="handleRemoveUser" @edit-data="handleEditUser" />
    <pagination-control v-model:totalItems="users.length" v-model:dataSource="users" v-model:pageSize="pageSize"
      @page-changed="handlePageChanged" />
    <edit-dialog v-model:visible="dialogVisible" v-model:formData="editUser" @submit="handleSubmitEdit">
    </edit-dialog>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getUsers, type User } from "../mock/data.ts"
import PaginationControl from '@/components/PaginationControl.vue';
import FormTable from '@/components/FormTable.vue';
import { ElMessage } from 'element-plus';
const dialogVisible = ref(false)
// 作为数据源
const users = ref<User[]>([])
const searchKeyword = ref("");
const pagingUsers = ref<User[]>([])
const newName = ref("")
const editUser = ref<User>({
  id: 0,
  name: ''
})
const pageSize = ref(5)
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
const handleSubmitEdit = (formData: { name: string; id: number; }) => {
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
  pagingUsers.value = users.value.slice(0, pageSize.value);
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
