<template>
  {{myMsg}}
  <!-- <img :src="testImg" /> -->
</template>

<script>  
export default {
  name: 'HelloWorld',
  props: {
    msg: Number
  },
  data() {
    return {
      myMsg : 0,
      // testImg : require('../../../../../Users/r36/Desktop/err1.png')
    }
  },
  watch: {
    msg(newValue) {
      console.log(newValue)
      this.myMsg = newValue
    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
