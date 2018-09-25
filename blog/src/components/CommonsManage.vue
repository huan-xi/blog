<template>
  <div class="right-context">
    <h3>评论管理</h3>
    <el-tabs type="border-card">
      <el-tab-pane label="我评论的">
        <div class="common-list">
          <common-item/>
          <common-item/>
          <common-item/>
        </div>
      </el-tab-pane>
      <el-tab-pane label="评论我的">评论我的</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import CommonItem from "./item/CommonItem";
  export default {
    name: "CommonsManage",
    components: {CommonItem}
  }
</script>s

<style scoped>

</style>
