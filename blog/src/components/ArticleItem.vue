<template>
  <div class="articleItem container-fluid">
    <div class="item-box row">
      <div class="box-left col-xs-3">
        <a href="#">
          <img class="center-block img-responsive"
               src="https://ws1.sinaimg.cn/large/006tNbRwgy1fvimjvbffqj31hc0u07wh.jpg"/>
        </a>
      </div>
      <div class="box-right col-xs-9">
        <h2><a href="#" title="很久没更新了，来一发">很久没更新了，来一发</a></h2>
        <div class="context">
          seo优化最让人苦恼的问题，就是网站关键词优化了很久，但是迟迟没有效果，网站优化不到首页，网站的流量就会大大的减少，或者几乎没有，这个时候，你就要自测一下，自己是否掉进了SEO优化的误区大坑中。就让颓废SEO大家剖析一下。
          ...
        </div>
        <ul class="info">
          <li>
            <div class="avatar">
              <img alt="" src="https://www.0dayhack.com/content/uploadfile/201707/thum-a1ce1499348908.jpg" class="avatar avatar-96 photo" height="96" width="96"></div>
            头像
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .box-left {
    text-align: center;
    padding-top: 20px;
  }

  .item-box {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }

  .articleItem {
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #eaeaea
  }

  .box-right a {
    color: #222;
  }

  @media screen and (max-width: 766px) {
    .articleItem {
      padding: 0;
    }

    .item-box img {
      height: 80px;
    }

    .context {
      display: none;
    }

    .box-left {
      width: 40%;
      padding-left: 5px;
    }

    .box-right h2 {
      font-size: 18px;
    }

    .box-right {
      width: 60%;
      padding-left: 0;
    }

    .info {
      padding: 0;
      margin-top: 34px;
    }
  }
</style>
<script>
  export default {
    name: "ArticleItem"
  }
</script>
