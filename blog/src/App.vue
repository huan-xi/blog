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
  import MyHeader from './components/Header'
  import MyFooter from './components/Footer'
  import MyMobileFooter from './components/MobileFooter'
  import Login from './components/Login'
  import Search from './components/Search'

  export default {
    name: 'App',
    components: {Search, Login, MyMobileFooter, MyFooter, MyHeader}
  }
</script>
<style>
  a, a:hover, a:link, a:visited {
    text-decoration: none !important;
    cursor: url("./assets/link.png"), pointer;
  }

  button:hover {
    cursor: url("./assets/link.png"), pointer;
  }

  html {
    cursor: url("./assets/default.png"), default;
  }
</style>
