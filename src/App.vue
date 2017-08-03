<template>
  <section class="vbox">
    <router-view name='register'></router-view>
    <router-view name='login'></router-view>
    <router-view name="header"></router-view>
    <router-view name="wrapper"></router-view>
    <router-view name="player"></router-view>
  </section>
</template>

<script>
  import siteHeader from './components/site-header/index.vue'
  import mainWrapper from './components/main-wrapper/index.vue'
  import { event } from './utils'
  // import siteFooter from '/components/site-footer/index.vue'
  export default {
    name: 'app',
    components: {siteHeader, mainWrapper},
    methods: {
      init () {
        event.emit('whackup:ready')
      }
    },
    created () {
      this.init()
      event.on({'whackup:ready': () => { console.log('app is  ready') }})
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<style src="../src/styles/css/bootstrap.css"></style>
<style src="../src/styles/css/animate.css"></style>
<style src="../src/styles/css/font-awesome.min.css"></style>
<style src="../src/styles/css/simple-line-icons.css"></style>
<style src="../src/styles/css/font.css"></style>
<style src="../src/styles/css/app.css"></style>
<style lang="less">
  @import "styles/less/app";
</style>

