<template>
  <section id="content">
    <router-view name="content"></router-view>
  </section>
</template>
<script>
  import blog from './blog.vue'
  import clubs from './clubs.vue'
  import events from './events.vue'
  import profile from './userprofile/index.vue'
  import listen from './listen/index.vue'
  export default{
    components: {blog, clubs, events, profile, listen}
  }
</script>
<style></style>
