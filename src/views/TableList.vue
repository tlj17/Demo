<script setup>
    import { useTableStore } from '../store/index.js';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const store = useTableStore()
    let tableData = store.tableData
    const deleteRow = (index) => {
        // console.log(index);
        tableData.splice(index, 1)
    }
    const viewInfo = (index)=>{
     router.push(`/view/${index}`)
    }
    
</script>

<template>
    <el-table :data="tableData" style="width: 100% ;height:400px; margin-top:100px;">
        <el-table-column fixed prop="name" label="姓名" width="150" />
        <el-table-column prop="birth" label="生日" width="150" />
        <el-table-column prop="sex" label="性别" width="60" />
        <el-table-column prop="phone" label="联系电话" width="200" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="idNum" label="身份证号" width="250" />
        <el-table-column prop="employeeId" label="工号" width="150" />
        <el-table-column prop="startDate" label="入职日期" width="150" />
        <el-table-column prop="department" label="所在部门" width="150" />
        <el-table-column prop="position" label="职位" width="200" />
        <el-table-column fixed="right"  width="120">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="viewInfo(scope.$index)"><el-icon><View /></el-icon>查看</el-button>
                <el-button link type="primary" size="small" @click="deleteRow(scope.$index)"><el-icon><Delete /></el-icon>删除</el-button>
      </template>
        </el-table-column>
  </el-table>
</template>
