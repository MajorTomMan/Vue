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
    <el-table :loading="loading" :data="pagingRoles" border style="width: 100%">
      <el-table-column prop="id" label="Id" />
      <el-table-column prop="role" label="Role" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="default" @click="handleRemoveRole(scope.row.id)">
            删除角色
          </el-button>
          <el-button type="primary" size="default" @click="handleEditRole(scope.row)">
            编辑角色
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <pagination-control v-model:totalItems="filteredRoles.length" v-model:dataSource="filteredRoles"
      v-model:pageSize="pageSize" @page-changed="handlePageChanged" />
    <edit-dialog v-model:visible="dialogVisible" v-model:formData="editRole" @submit="handleSubmitEdit">
    </edit-dialog>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getRoles, type Role } from "../mock/data.ts"
import { ElMessage } from 'element-plus';
import PaginationControl from '@/components/PaginationControl.vue';
import EditDialog from '@/components/EditDialog.vue';
const pageSize = ref(5)
const dialogVisible = ref(false);
const editRole = ref<Role>({ id: 0, role: "" });
const loading = ref(false);
// roles是用来缓存全部数据的
const roles = ref<Role[]>([])
const searchKeyword = ref("");
const newAddRole = ref("")
const pagingRoles = ref<Role[]>([])
const filteredRoles = computed(() => {
  if (!searchKeyword.value) {
    return roles.value;
  }
  return roles.value.filter((role) =>
    role.role.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});
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
const handleSubmitEdit = (formData) => {
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
  filteredRoles.value = roles.value;
  handlePageChanged(filteredRoles.value.slice(0, pageSize.value), 1);
})
</script>
