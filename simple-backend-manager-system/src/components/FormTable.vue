<template>
    <el-table :data="formData" border style="width: 100%">
        <el-table-column v-for="key in dynamicKeys" :key="key" :prop="key" :label="key">
        </el-table-column>
        <el-table-column label="operator">
            <template #default="scope">
                <el-button type="primary" size="default" @click="handleRemoveData(scope.row.id)">
                    删除角色
                </el-button>
                <el-button type="primary" size="default" @click="handleEditData(scope.row)">
                    编辑角色
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script setup lang="ts">
import { computed } from 'vue'
const formData = defineModel<Record<string, any>[]>("formData", { default: [] })

const emits = defineEmits(["remove-data", "add-data", "edit-data"])
// 动态获取所有的key
const dynamicKeys = computed(() => {
    const keys = new Set<string>()
    formData.value.forEach((item: {}) => {
        Object.keys(item).forEach(key => keys.add(key))
    })
    return [...keys]
})
const handleRemoveData = (id: number) => {
    emits("remove-data", id)
}
const handleEditData = (row: any) => {
    emits("edit-data", row)
}
const handleAddData = () => {
    emits("add-data")
}
</script>