<template>
    <div class="servicePage">
        <ServiceSection></ServiceSection>
    </div>
</template>

<script>
import ServiceSection from '../components/ServiceSection'
import {watch} from 'vue'
import user from '../composables/user'
import {useRouter} from 'vue-router'
export default {
  components: { ServiceSection },
     setup(){
      let router=useRouter();
      watch(user, () => {
        router.push('/createUserAccount')
      })
    }
}
</script>

<style scoped>
    .servicePage{
        margin: 5% 0px;
    }
</style>