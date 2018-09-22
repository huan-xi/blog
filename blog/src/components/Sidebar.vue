<template>
  <div class="col-md-2">
    <el-menu default-active="1-1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="fa fa-tachometer icon"></i>
          <span slot="title">个人首页</span>
        </template>
        <router-link to="/">
          <el-menu-item index="1-1">
            <i class="fa fa-home icon">
            </i>主页
          </el-menu-item>
        </router-link>
        <router-link to="updateInfo">
          <el-menu-item index="1-2">
            <i class="fa fa-id-card-o icon"></i>资料修改
          </el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="fa fa-language icon"></i>
          <span slot="title">博客管理</span>
        </template>
        <router-link to="/">
          <el-menu-item index="2-1">
            <i class="fa fa-pencil-square-o icon">
            </i>发布文章
          </el-menu-item>
        </router-link>
        <el-menu-item index="2-2"><i class="fa fa-gavel icon"></i>管理文章</el-menu-item>
        <el-menu-item index="2-3"><i class="fa fa-comments icon"></i>评论管理</el-menu-item>
      </el-submenu>

      <el-menu-item index="3">
        <i class="fa fa-sign-in icon"></i>
        <span slot="title">安全退出</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .icon {
    padding-right: 4px;
    font-size: 17px;
  }

  .el-menu li {
    cursor: url("../assets/link.png"), pointer;
  }
</style>
<script>
  export default {
    name: 'sidebar',
    data() {
      return {
        isCollapse: false
      }
    }
  }
</script>


