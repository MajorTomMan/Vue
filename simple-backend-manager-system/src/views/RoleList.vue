<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-05-04 11:04:43
 * @FilePath: \simple-backend-manager-system\src\views\RoleList.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <div class="user-list-wrapper">
    <input v-model="searchKeyword" placeholder="Search roles..." />
    <div>
      <input v-model="newAddRole" placeholder="Add roles" />
      <button @click="handleAddRole">添加角色</button>
    </div>
    <form-table :form-data="pagingRoles" @remove-data="handleRemoveRole" @edit-data="handleEditRole" />
    <!-- 分页 -->
    <pagination-control v-model:totalItems="roles.length" v-model:dataSource="roles" v-model:pageSize="pageSize"
      @page-changed="handlePageChanged" />
    <edit-dialog v-model:visible="dialogVisible" v-model:formData="editRole" @submit="handleSubmitEdit">
    </edit-dialog>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import { getRoles, type Role } from "../mock/data.ts"
import { ElMessage } from 'element-plus';
import PaginationControl from '@/components/PaginationControl.vue';
import EditDialog from '@/components/EditDialog.vue';
import FormTable from '@/components/FormTable.vue';
const pageSize = ref(5)
const dialogVisible = ref(false);
const editRole = ref<Role>({ id: 0, role: "" });
const loading = ref(false);
// roles是用来缓存全部数据的
const roles = ref<Role[]>([])
const searchKeyword = ref("");
const newAddRole = ref("")
const pagingRoles = ref<Role[]>([])


watchEffect(() => {
  if (!searchKeyword.value) {
    pagingRoles.value = roles.value.slice(0, pageSize.value);
  }
  else {
    pagingRoles.value = roles.value.filter((role) => {
      if (role.role.toLowerCase().includes(searchKeyword.value.toLowerCase())) {
        return true;
      }
      return false;
    });
  }
})


const handleAddRole = () => {
  if (newAddRole.value == "") {
    console.log("角色名为空")
    return;
  }
  const role = roles.value[roles.value.length - 1]
  const newAddId = role.id + 1
  const newRole = {
    id: newAddId,
    role: newAddRole.value,
  }
  roles.value.push(newRole)
  newAddRole.value = ""
}
const handleRemoveRole = (id: number) => {
  if (roles.value.length == 0) {
    return;
  }
  const index = roles.value.findIndex(user => user.id === id);
  if (index !== -1) {
    roles.value.splice(index, 1);
  }
}
const handleEditRole = (row: { id: number; role: string; }) => {
  editRole.value.id = row.id;
  editRole.value.role = row.role;
  dialogVisible.value = true;
}
const handleSubmitEdit = (formData: { role: string; id: number; }) => {
  console.log(formData);
  if (formData.role == "") {
    ElMessage("角色名不能为空")
    return;
  }
  roles.value.forEach(role => {
    if (role.id == formData.id) {
      role.role = formData.role
    }
  })
  dialogVisible.value = false;
}
const handlePageChanged = (newDataSource: Array<any>, currrentPage: number) => {
  pagingRoles.value = newDataSource
}
onMounted(async () => {
  const result = await getRoles() as Role[];
  roles.value = result;
  pagingRoles.value = roles.value.slice(0, pageSize.value);
})
</script>
