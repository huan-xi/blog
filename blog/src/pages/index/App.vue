<template>
  <div id="app">
    <my-header/>
    <router-view/>
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
  export default {
    name: 'App',
    components: {Search, Login, MyMobileFooter, MyFooter, MyHeader}
  }
</script>
<style>
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

  @media screen and (max-width: 766px) {
    .bg-fixed {
      display: none;
    }
  }
  ul{
    margin: 0;
    list-style:none;
  }
</style>
