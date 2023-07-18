<script setup>
import Aside from '../components/Aside.vue'
import Header from '../components/Header.vue'
</script>

<template>
   <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header style="padding:0;">
            <Header></Header>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
  .common-layout{
    height: 100%;
  .el-container{
    height: 100%;
  }
    
  }
  
</style>