<!--
 * @Date: 2025-04-26 18:42:43
 * @LastEditors: MajorTomMan 765719516@qq.com
 * @LastEditTime: 2025-04-28 23:08:37
 * @FilePath: \Vue\simple-backend-manager-system\src\views\RoleList.vue
 * @Description: MajorTomMan @版权声明 保留文件所有权利
-->
<template>
  <div class="user-list-wrapper">
    <input v-model="searchKeyword" placeholder="Search roles..." />
    <div>
      <input v-model="newAddRole" placeholder="Add roles" />
      <button @click="handleAddRole">添加角色</button>
    </div>
    <el-table :loading="loading" :data="newRoles" border style="width: 100%">
      <el-table-column prop="id" label="Id" />
      <el-table-column prop="role" label="Role" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="default" @click="handleRemoveRole(scope.row.id)">
            删除角色
          </el-button>
          <el-button type="primary" size="default" @click="handleEditRole()">
            编辑角色
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
import { getRoles, type Role } from "../mock/data.ts"

const loading = ref(false);
const roles = ref<Role[]>([])
const searchKeyword = ref("");
const newRoles = ref<Role[]>([])
const newAddRole = ref("")
const pageSize = 5;
let currentPage = ref(1);
let start = 0;
let end = start + pageSize;
const filteredRoles = computed(() => {
  if (!searchKeyword.value) {
    return roles.value;
  }
  return roles.value.filter((role) =>
    role.role.toLowerCase().includes(searchKeyword.value.toLowerCase())
  );
});
watchEffect(() => {
  currentPage.value = 1;
  start = 0;
  end = pageSize;
  newRoles.value = filteredRoles.value.slice(start, end);
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
  newRoles.value = filteredRoles.value.slice(start, end);
}
const handleRemoveRole = (id: number) => {
  if (roles.value.length == 0) {
    return;
  }
  const index = roles.value.findIndex(user => user.id === id);
  if (index !== -1) {
    roles.value.splice(index, 1);
  }
  newRoles.value = filteredRoles.value.slice(start, end);
}
const requestNextPage = () => {
  if (currentPage.value * pageSize >= filteredRoles.value.length) {
    console.log("已经到最后一页,不能再往后了");
    return;
  }
  currentPage.value += 1;
  start = (currentPage.value - 1) * pageSize;
  end = start + pageSize;
  newRoles.value = filteredRoles.value.slice(start, end);
}
const requestPreviousPage = () => {
  if (currentPage.value === 1) {
    console.log("已经到第一页,不能再往前了");
    return;
  }
  currentPage.value -= 1;
  start = (currentPage.value - 1) * pageSize;
  end = start + pageSize;
  newRoles.value = filteredRoles.value.slice(start, end);
}
const handleEditRole = () => {

}
onMounted(async () => {
  loading.value = true;
  const result = await getRoles() as Role[];
  roles.value = result;
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
