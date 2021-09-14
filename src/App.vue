<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div><button @click="testAPI">new window</button></div>
    
  </div>
  <router-view/>
</template>

<script>
import { myservice } from './services/test.service';
export default {
  name: "App",
  provide: {id : myservice},
  methods : {
    openWindow() {
      window.open("http://localhost:8080/about")
    },
    testAPI() {
      // fetch('https://api.github.com/', {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }).then(response => response.json())
      //   .then(data => console.log(data)).catch(err => console.log(err))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
