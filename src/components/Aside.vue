<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  //菜单栏点击路由跳转函数
  const goToPage=(pageName)=>{
    pageName == 'input' ? router.push({name:pageName}) : router.push({name:pageName})
  }

</script>


<template>
  <!-- <div class="menu"> -->
    <el-menu>
        <el-menu-item index="1" @click="goToPage('input')">
          <el-icon><Menu /></el-icon>
          <span>录入信息</span>
        </el-menu-item>
        <el-menu-item index="2" @click="goToPage('tablelist')">
          <el-icon><setting /></el-icon>
          <span>表格列表</span>
        </el-menu-item>
    </el-menu>
  <!-- </div> -->
    
    
</template>

<style lang="less" scoped>
  .el-menu{
    height: 100%;
    background-color: rgb(190, 215, 237);
  }
</style>