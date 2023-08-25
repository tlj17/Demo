<script setup>
    import { useTableStore } from '../store/index.js';
    import { useRouter } from 'vue-router';
    import { reqTableList,deleteInfo } from '../api';
    import { ref } from 'vue'
    const router = useRouter()
    // const store = useTableStore()
     
    let tableData = ref([])
    async function gettableData(){
        try{
            let result = await reqTableList()
            if(result.code == 200)
            {
                tableData.value = result.data
            }
        }catch(err){
            console.log(err);
        }
    }  

    async function main() {
        await gettableData(); 
        // console.log(tableData.value);
    }

    main(); 

    // let tableData = store.tableData
    //删除数据
    // const deleteRow = (index) => {
    //     tableData.value.splice(index, 1)
    // }

    //删除数据
    const deleteRow = (employeeId)=>{
        deleteInfo(employeeId)
        gettableData()
    }

    //跳转查看内容
    const viewInfo = (employeeId)=>{
     router.push(`/view/${employeeId}`)
    }

    //跳转编辑表单
    const editInfo = (employeeId)=>{
        router.push({path:'/input',query:{employeeId}})
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
        <el-table-column fixed="right"  width="180">
            <template #default="scope">
                <el-button link type="primary" size="small" @click="viewInfo(scope.row.employeeId)"><el-icon><View /></el-icon>查看</el-button>
                <el-button link type="primary" size="small" @click="editInfo(scope.row.employeeId)"><el-icon><Delete /></el-icon>编辑</el-button>
                <el-button link type="primary" size="small" @click="deleteRow(scope.row.employeeId)"><el-icon><Delete /></el-icon>删除</el-button>
      </template>
        </el-table-column>
  </el-table>
</template>
