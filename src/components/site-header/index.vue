<template>

  <header class="bg-white-only header header-md navbar navbar-fixed-top-xs">
    <logo></logo>
    <toogle-sidebar></toogle-sidebar>
    <account-snippet></account-snippet>
  </header>

</template>

<script>
  import logo from './logo.vue'
  import toogleSidebar from './toggle-sidebar.vue'
  import searchBar from './search-bar.vue'
  import accountSnippet from './account-snippet.vue'

  export default{
    components: {logo, toogleSidebar, searchBar, accountSnippet},
    created () {
  //    console.log(this.$store.getters.getUserStore.current)
    }
  }
</script>
<style></style>
