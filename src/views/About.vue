<template>
  <div class="aboutPage">
    <AboutSection></AboutSection>
  </div>
</template>

<script>
import AboutSection from '../components/AboutSection'
import {watch} from 'vue'
import user from '../composables/user'
import {useRouter} from 'vue-router'
export default {
  components: { AboutSection },
    setup(){
      let router=useRouter();
      watch(user, () => {
        router.push('/createUserAccount')
      })
    }
}
</script>

<style scoped>
    .aboutPage{
        margin-top: 10%  ;
    }
</style>