<template>
<div v-if="checkUser">
    <Navbar></Navbar>
</div>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'
import user from './composables/user'
export default {
  components: { Navbar },
  setup(){
    let checkUser=user;

    return {checkUser}
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: #2e2c50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

::selection{
  background-color: rgb(255, 94, 0);
  color: #fff;
}
</style>
