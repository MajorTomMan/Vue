    <template>
        <el-table :data="formData" border style="width: 100%" default-expand-all>
            <el-table-column v-for="key in dynamicKeys" :key="key" :prop="key" :label="key">
                <template #default="{ row }">
                    <!-- 判断是否为对象 -->
                    <span v-if="typeof row[key] === 'object'">
                        {{ JSON.stringify(row[key]) }}
                    </span>
                    <span v-else>
                        {{ row[key] }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column label="operator">
                <template #default="scope">
                    <el-button-group class="form-table">
                        <el-button type="primary" size="default" @click="handleRemoveData(scope.row.id)">
                            删除角色
                        </el-button>
                        <el-button type="primary" size="default" @click="handleEditData(scope.row)">
                            编辑角色
                        </el-button>
                    </el-button-group>
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

<style lang="css" scoped>
.form-table {
    display: flex;
    align-items: center;
    /* 垂直居中 */
    gap: 10px;
    /* 按钮和文字之间留点空隙，可选 */
}
</style>