<template>
  <section class="hbox stretch">
    <section>
      <home-content></home-content>
    </section>
    <!-- side content
    <chat></chat> -->
    <!-- ici le chat ! -->
    <!-- / side content -->
  </section>
</template>
<script>
  import homeContent from './home-content/index.vue'
 // import chat from './chat.vue'
  export default{
    components: {
      homeContent
    }
  }
</script>
<style>
</style>
