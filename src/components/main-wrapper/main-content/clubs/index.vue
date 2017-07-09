<template>
  <section class="hbox stretch">
    <section id="content">
      <section class="vbox">
        <section class="w-f-md" id="bjax-target">
          <section class="hbox stretch">
            <genres></genres>
            <content-club></content-club>
          </section>
        </section>
      </section>
    </section>
  </section>
</template>
<script>
  import genres from './genres-layout.vue'
  import contentClub from './main-content.vue'
  export default {
    components: {
      genres,
      contentClub
    }
  }
</script>
<style>
</style>
