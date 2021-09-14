<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>


<script>
// @ is an alias to /src


export default {
  name: 'About',
  components: {
    
  },
  inject: ['id'],
  mounted() {
    console.log('test-----', this.id()) 
},
  metaInfo: {
      title: 'My Example App',
      titleTemplate: '%s - Yay!',
      htmlAttrs: {
        lang: 'en',
        amp: true
      }
    }
}
</script>

