<template>
<div>
  <div class="modal fade" id="mySearch" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close" data-dismiss="modal">×</button>
          <h3 class="sign-title">搜索</h3>
        </div>
        <div class="search-form-inner">
          <div class="search-form-box">
            <input class="search-input" name="keyword" placeholder="键入搜索关键词" type="text">
            <button type="submit" class="search-btn"><i class="fa fa-search"></i> </button>
          </div>
          <div class="search-commend">
            <h4>大家都在搜</h4>
            <ul>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/漏洞扫描">漏洞扫描</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/sqlmap">sqlmap</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/旁站查询">旁站查询</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/采集">采集</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/exp">exp</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/盲注">盲注</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/摄像头爆破">摄像头爆破</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/黑客教程">黑客教程</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/漏洞挖掘">漏洞挖掘</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/免杀">免杀</a></li>
              <li class="search-go"><a href="https://www.0dayhack.com/tag/颓废安全组">颓废安全组</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mySearch{
    margin-top: 50px;
  }
  .sign-title {
    font-size: 18px;
    margin: 3px 10px;
    color: #3DBAF9;
    border-bottom: 2px solid #3DBAF9;
    width: 72px;
    padding-bottom: 8px;
  }
  .search-input{
    background: #fff;
    display: inline-block;
    line-height: 58px;
    height: 58px;
    color: #949494;
    font-size: 15px;
    border-radius: 3px;
    padding: 0 20px;
    width: 100%;
    border: 1px solid #404040;
    text-align: left;
  }
  .search-form-box, .search-commend{
    position: relative;
    margin-top: 50px;
    padding-left: 50px;
    padding-right: 50px;
  }
  @media screen and (max-width: 430px) {
    .search-btn, .search-input{
      height: 37px !important;
      line-height: 37px !important;
    }
    .search-form-box{
      margin-top: 25px !important;
    }
    .search-commend{
      margin-top: 30px;
      padding-left: 25px;
    }
  }
  .search-btn{
    background: #000;
    display: inline-block;
    line-height: 58px;
    height: 58px;
    width: 100px;
    color: #fff;
    font-size: 15px;
    padding: 0 25px;
    margin: 0;
    border-radius: 0 3px 3px 0;
    position: absolute;
    right: 50px;
    top: 0;
    border: 0;
  }
  .search-commend ul li {
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .set_cnt li, ul li {
    list-style: none;
  }
  .search-go a:hover{
    border: 1px solid black;
  }
  .search-go a{
    display: inline-block;
    line-height: 1;
    padding: 10px 20px;
    border: 1px solid #e2e2e2;
    border-radius: 2px;
    color: #949494;
  }
</style>
<script>
  export default {
    name: 'search',
  }
</script>


