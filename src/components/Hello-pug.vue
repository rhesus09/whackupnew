<template lang="pug">
div.hello
  h1 '{{ msg }}'
  h2 Enssential Links
  ul
    for val, index in [{href:'https://vuejs.org',text:'Core Docs'},{href:'https://forum.vuejs.org',text:'Forum'}, {href:'https://gitter.im/vuejs/vue',text:'Git'}, {href:'https://twitter.com/vuejs',text:'Twitter'}, {href:'http://vuejs-templates.github.io/webpack/',text:'Templates'}]
      li
        a(href= val.href) #{val.text}
      if index == 3
        br
  h2 Ecosysteme
</template>

<script>
  console.log(window._)
  console.log(window.$)
 // console.log(window.axios)

 // window.axios.get('https://httpbin.org/ip')
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
