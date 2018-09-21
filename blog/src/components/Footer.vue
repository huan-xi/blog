<template>
  <div class=" copy-right">
    <footer id="footer" class="text-center container">
      <div class="footer-tag-list">
        <i class="fa fa-html5"></i> Copyright © 2017 <a href="#"> </a>丨勉强运行：0天
      </div>
      <p>
        本站所发布的任何软件，全部来源于互联网，版权争议与本站无关。仅限用于学习和研究，
        您必须在下载后的24个小时之内，
        从您的电脑中彻底删除上述内容。
        学习网络技术是为了更好的提升自我安全意识。不允许将内容私自传播、销售或
        者其他任何非法用途！否则，一切后果请用户自负！
        学习中请遵循国家相关法律法规，黑客不是骇客，黑客维护网络安全。
      </p>
    </footer>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #footer {
    position: fixed;
    bottom: 10px;
    color: rgb(112, 118, 130);
    font-size: 12px;
  }

  @media screen and (max-width: 766px) {
    #footer {
      display: none;
    }
  }
</style>
<script>
  export default {
    name: 'my-footer',
  }
</script>


