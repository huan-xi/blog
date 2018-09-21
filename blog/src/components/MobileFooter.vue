<template>
  <div>
    <div id="mobile-footer">
      <ul id="mobile-menu">
        <li><a href="#/"> <span class="fa fa-home"></span> 首页 </a></li>
        <li><a href="javascript:;" class="fly-search-s"> <span class="fa fa-search" data-toggle="modal"
                                                               data-target="#mySearch"></span> 搜索 </a></li>
        <li><a href="#/about"> <span class="fa fa-info"></span> 关于 </a></li>
        <li id="mobile-login"><a href="#" class="expand" data-toggle="modal" data-target="#myLogin"> <span
          class="fa fa-user"></span> 用户 </a></li>
      </ul>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mobile-footer {
    position: fixed;
    bottom: 10px;
    width: 100%;
    z-index: 9999;
  }

  @media screen and (min-width: 766px) {
    #mobile-footer {
      display: none;
    }
  }

  #mobile-menu {
    display: block;
    padding: 0;
  }

  #mobile-menu > li {
    width: 25%;
    display: block;
    float: left;
    border-top: 1px solid #e6e6eb;
    height: 100%;
    list-style: none;
  }

  #mobile-menu > li > a > span {
    font-size: 20px;
    display: block;
    line-height: 34px;
  }

  #mobile-menu > li > a {
    text-align: center;
    color: #929292;
    display: block;
    line-height: 10px;
    height: 100%;
  }
</style>
<script>
  export default {
    name: 'my-mobile-footer',
  }
</script>


