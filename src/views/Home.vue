<template>
  <div class="home">
   <button @click="add()">add</button>
   {{test}}
    <HelloWorld :msg="test" />
    <!-- {{test}} -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, watch } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
   inject: ['id'],
  mounted() {
    console.log('test-----', this.id()) 
},
setup() {
  let test = ref(0)
  watch(test, (newVal) => {
    return newVal
  })
  // eslint-disable-next-line no-unused-vars
  const add = () => {
      test.value = test.value + 1
    }
  return {test, add}
},
watch: {
  test: function(newValue) {
    console.log(newValue)
    this.test = newValue
  }
},
methods: {
    
  }
}
</script>
