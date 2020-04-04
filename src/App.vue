<template>
  
   <el-container>
        <el-header>
            <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="/home">首页</el-menu-item>
                <el-menu-item index="/class">课程</el-menu-item>
                <el-menu-item index="/register" style="float:right">注册</el-menu-item>
                <el-menu-item index="/login" style="float:right">登录</el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
  
</template>

<script>


export default {
  name: 'app',
  data() {
        return {
            activeIndex2: '1'
        };
    },
    methods: {

    },
  components: {
   
  }
};
</script>

<style>

</style>
