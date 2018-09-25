<template>
  <section class="container">
    <div class="user-panel">
      <a href="javascript:void(0)">
        <div class="outline-circle img-circle">
          <img class="header-img img-circle" src="https://pjax.cn/content/templates/FLY/img/tx/3.jpg">
        </div>
        <div class="user-name"><span>摩羯座</span></div>
      </a>
    </div>
    <div class="user-info">
      <div class="right">
        <span class="title">主页:</span>
        <span>https://pjax.cn/author/156</span>
        <span class="title">个性签名:</span>
        <span>这家伙很懒，什么都没写！</span>
      </div>
    </div>
    <div class="row">
      <div class="blogs col-xs-9">
        <el-tabs type="border-card">
          <el-tab-pane label="文章 0">
            <div class="articl-list row">
              <article-item/>
              <article-item/>
              <article-item/>
            </div>
          </el-tab-pane>
          <el-tab-pane label="评论 0">
            <common-item/>
            <common-item/>
            <common-item/>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="personal-pale col-xs-3">
        <blockquote class="blockquote-reverse">
          <p>每一个不曾起舞的日子都是对生命的辜负</p>
          <footer>尼采</footer>
        </blockquote>
        <div class="category">
          <span class="category-title">文章分类</span>
          <ul>
            <li><a><i class="fa fa-book"></i> java</a></li>
            <li><a><i class="fa fa-book"></i> 前端相关</a></li>
          </ul>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  import ArticleItem from "./item/ArticleItem";
  import CommonItem from "./item/CommonItem";

  export default {
    name: "User",
    components: {CommonItem, ArticleItem}
  }
</script>

<style scoped>
  blockquote p{
    font-style: italic;
    font-size: 15px;
  }
  .personal-pale{
    margin-top: 75px;
  }
  .category{
    margin-left: 20px;
  }
  .category .category-title{
    font-size: 20px;
    font-style: italic;
    color: #969696;
  }
  .category ul li a{
    color: #606060;
  }
  .category ul li a .fa{
    padding-right: 4px;
  }
  .category ul li{
    line-height: 25px;
    font-size: 15px;
  }
  blockquote footer{
    font-size: 13px;
  }
  .blogs {
    margin-top: 30px;
  }

  .user-panel {
    height: 140px;
    background-image: url("https://ws4.sinaimg.cn/large/006tNbRwgy1fvkvq5nojej30qo08cgm0.jpg");
    position: relative;
  }

  .user-info .right {
    float: right;
  }

  .user-info span {
    margin-top: 3px;
    font-size: 15px;
    color: #969696;
  }

  .user-info .title {
    font-size: 16px;
    color: #7f7f7f;
  }

  .user-panel .header-img {
    width: 140px;
    height: 140px;
    margin: 5px;
  }

  .user-name {
    position: absolute;
    z-index: 50;
    top: 73%;
    left: 185px;
    height: 40px;
    line-height: 40px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: -20px;
    padding: 0 20px;
    color: red;
    font-size: 20px;
    white-space: nowrap;
    background-color: #fff;
    box-shadow: 0 0 4px 2px rgba(204, 204, 204, .4);
  }

  .outline-circle {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 20%;
    left: 50px;
    background-color: white;
    z-index: 100;
  }
</style>
