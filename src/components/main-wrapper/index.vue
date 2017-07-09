<template>

  <section>
    <section class="hbox stretch">
      <side-bar></side-bar>
      <main-content></main-content>
    </section>
  </section>

</template>

<script>
  import sideBar from './sidebar/index.vue'
  import mainContent from './main-content/index.vue'
  export default{
    components: {sideBar, mainContent}
  }
</script>
<style></style>
