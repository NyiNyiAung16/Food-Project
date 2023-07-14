<template>
  <div v-if="switchComponent">
    <Login @switch="switchComponent=!switchComponent"></Login>
   </div>
  <div v-else>
    <SignIn @switchLogin="switchComponent=!switchComponent"></SignIn>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import SignIn from '../components/SignIn'
export default {
  components: {
    Login, SignIn },
    setup(){
      let switchComponent=ref(true);
      return {switchComponent};
    }
}
</script>

<style>

</style>