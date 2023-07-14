<template>
  <div class="contactPage">
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import FooterSection from '../components/FooterSection'
import {watch} from 'vue'
import user from '../composables/user'
import {useRouter} from 'vue-router'
export default {
  components: { FooterSection },
   setup(){
      let router=useRouter();
      watch(user, () => {
        router.push('/createUserAccount')
      })
    }
}
</script>

<style scoped>
    .contactPage{
        margin-top: 14%;
    }
</style>