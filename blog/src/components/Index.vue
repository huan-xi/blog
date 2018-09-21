<template>
  <div>
    <!--轮播图-->
    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img src="http://pic28.photophoto.cn/20130830/0005018373595008_b.jpg" alt="...">
        </div>
        <div class="item">
          <img src="http://pic28.photophoto.cn/20130830/0005018373595008_b.jpg" alt="...">
        </div>
      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .carousel-inner img {
    width: 100%;
    height: 340px !important;
  }

  @media screen and (max-width: 766px) {
    .carousel-inner img {
      height: 200px !important;
    }
  }
</style>
<script>
  export default {
    name: 'index',
    data() {
      return {}
    }
  }
</script>
