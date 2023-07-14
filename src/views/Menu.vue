<template>
  <div class="menuPage">
    <MenuSection></MenuSection>
  </div>
</template>

<script>
import MenuSection from '../components/MenuSection'
import {watch} from 'vue'
import user from '../composables/user'
import {useRouter} from 'vue-router'
export default {
  components: { MenuSection },
   setup(){
      let router=useRouter();
      watch(user, () => {
        router.push('/createUserAccount')
      })
    }
}
</script>

<style scoped>
    .menuPage{
        margin-top: 10%;
    }
</style>