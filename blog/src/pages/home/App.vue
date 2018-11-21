<template>
  <div id="app">
    <my-header/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-2">
          <sidebar/>
        </div>
          <router-view/>
      </div>
    </div>
    <my-footer/>
    <my-mobile-footer/>
    <login/>
    <search/>
  </div>
</template>
<script>
  import MyHeader from '../../components/Header'
  import MyFooter from '../../components/Footer'
  import MyMobileFooter from '../../components/MobileFooter'
  import Login from '../../components/Login'
  import Search from '../../components/Search'
  import Home from "../../components/Home";
  import Sidebar from "../../components/Sidebar";

  export default {
    name: 'App',
    components: {Sidebar, Home, Search, Login, MyMobileFooter, MyFooter, MyHeader}
  }
</script>
<style>
  .right-context{
    border: solid 1px rgba(168, 157, 162, 0.6);
    border-radius: 10px;
    margin-left: 230px;
    padding-left: 10px;
  }
  a, a:hover, a:link, a:visited {
    text-decoration: none !important;
    cursor: url("../../assets/link.png"), pointer;
  }

  button:hover {
    cursor: url("../../assets/link.png"), pointer;
  }

  html,body{
    min-height: 100%;
    cursor: url("../../assets/default.png"), default;
  }
  body{
    height: 100%;
    margin:0 auto !important;
  }
  @media screen and (min-width:1200px){
    body{
      width:1200px;
    }
  }
</style>
