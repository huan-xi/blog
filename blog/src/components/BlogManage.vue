<template>
    <div class="right-context">
      <h3>文章管理</h3>
      <el-tabs type="border-card">
        <el-tab-pane label="我发布的">
          <div class="articl-list">
            <article-item/>
            <article-item/>
            <article-item/>
          </div>
        </el-tab-pane>
        <el-tab-pane label="评喜欢的">我喜欢的</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
    import ArticleItem from "./item/BlogItem";
    export default {
        name: "ManageBlog",
      components: {ArticleItem}
    }
</script>

<style scoped>

</style>
