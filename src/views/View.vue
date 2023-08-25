<script setup>
    import { useTableStore } from '../store/index.js';
    import { useRoute ,useRouter} from 'vue-router';
    import { reqViewInfo } from '../api';
    import {reactive,ref,nextTick} from 'vue'
    // let store = useTableStore()
    const route = useRoute()
    const router = useRouter()

    const employeeId = route.params.employeeId
    // const data = store.tableData[index]||[]
    let data = reactive({}) 
    let values = ref([])
  
    async function getViewInfo() {
        let result = await reqViewInfo(employeeId); 
        if(result.code == 200)
        {
          data = result.data 
          values.value =  Object.values(data)
        }
    }
   
    async function main() {
        await getViewInfo(); 
    }

    main(); 

    //分别获取对象的键和值，方便遍历渲染表格
    const keys = ['姓名','生日','性别','联系电话','邮箱','身份证号','工号','入职日期','所属部门','职位']
    
    //返回列表页
    const returnList = () =>{
      router.push('/tablelist')
    }
</script>

<template>
    <div class="box">
  <el-descriptions
    :column="1"
    border
    style="margin-top: 100px;"
  >
    <el-descriptions-item 
    :label=" keys[o-1]" 
    label-align="center" 
    align="center"  
    v-for="o in keys.length" :key="o"
   > 
    {{ values[o-1] }}
    </el-descriptions-item>
  
  </el-descriptions>
    <el-button type="primary" plain @click="returnList">返回列表</el-button>
  </div>
  
</template>

<style lang="less" scoped>
  .box{
    margin: 0 auto;
    width: 800px;
    height: 100%;
    
    .el-button{
        margin-top: 20px;
    }
  }
</style>