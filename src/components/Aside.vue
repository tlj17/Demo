<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  //菜单栏点击路由跳转
  const goToPage=(pageName)=>{
    pageName == 'input' ? router.push({name:pageName}) : router.push({name:pageName})
  }

</script>


<template>
  <!-- 左侧菜单 -->
    <el-menu>
      <div><el-icon size="30px"><Menu /></el-icon> </div>
        <el-menu-item index="1" @click="goToPage('input')">
          <el-icon><EditPen /></el-icon>
          <span>录入信息</span>
        </el-menu-item>
        <el-menu-item index="2" @click="goToPage('tablelist')">
          <el-icon><List /></el-icon>
          <span>表格列表</span>
        </el-menu-item>
    </el-menu>
    
    
</template>

<style lang="less" scoped>
  .el-menu{
    height: 100%;
    background-color: rgb(190, 215, 237);
    div{
      height: 60px;
    }
  }
</style>