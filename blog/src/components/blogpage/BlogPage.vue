<template>
  <div class="container-fluid">
    <div class="row"></div>
    <div class="col-xs-2">
      <div class="blog_category">
        <ul>
          <li class="active"><a href="#">推荐</a></li>
          <li><a href="#">前端</a></li>
          <li><a href="#">Java</a></li>
          <li><a href="#">安卓</a></li>
          <li><a href="#">前端</a></li>
        </ul>
      </div>
    </div>
    <div class="col-xs-7">
      <blog-item/>
    </div>
    <div class="col-xs-3 blog-right">
      <div class="ad">广告</div>
      <div class="recommend">
        <h4>文章推荐</h4>
        <div class="recommend-blog">
          <img class="left" src="https://ws1.sinaimg.cn/large/006tNbRwgy1fvimjvbffqj31hc0u07wh.jpg">
          <div class="left box-right">
            <a href="#">很久没更新了</a>
            <div class="meta">
              <a href="/users/6d1d04ce2498"><span>石溪梅</span></a>
              <i class="fa fa-eye"></i> 16
              <i class="fa fa-comment"></i> 10
              <span><i class="fa fa-heart"></i> 4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .blog-right .ad {
    height: 200px;
  }

  .recommend-blog img {
    display: inline;
    width: 80px;
    height: 40px;
    margin-right: 6px;
  }

  .left {
    float: left;
  }

  .box-right a {
    color: #686868;
  }

  .meta {
    font-size: 10px;
  }

  .recommend-blog a {
    line-height: 0;
    color: #686868;
  }

  .blog-right h4 {
    border-left: solid 4px #707070;
    padding-left: 15px;
  }

  .blog_category ul li {
    display: block;
    width: 85px;
    height: 30px;
    text-align: center;
    margin-bottom: 2px;
  }

  .blog_category ul .active {
    background-color: #707070;
  }

  .blog_category ul .active a {
    color: #d2d2d2;
  }

  .blog_category ul li a {
    color: #707070;
    font-size: 17px;
    line-height: 30px;
   display: block;
  }

  .blog_category ul li:hover {
    background-color: #919191;
  }

  .blog_category ul li:hover a {
    color: #d2d2d2;;
  }
</style>

<script>
  import BlogItem from "../item/BlogItem";

  export default {
    name: "Blog",
    components: {BlogItem},
  }
</script>
