<template>
  <div class="articleItem container-fluid">
    <div class="item-box">
      <a href="#">
        <img src="https://www.0dayhack.com/content/templates/FLY/img/random/7.jpg?param=232y135"/>
      </a>
      <div class="box-right">
        <h2><a href="#" title="很久没更新了，来一发">很久没更新了，来一发</a></h2>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .item-box img {
    width: 230px;
    height: 153px;
  }

  .articleItem {
    /*box-shadow: 0 5px 18px 0 rgba(146, 146, 146, .1);*/
    padding: 10px;
    border: solid 1px red;
  }

  .box-right {
    float: right;
  }
</style>
<script>
  export default {
    name: "ArticleItem"
  }
</script>
