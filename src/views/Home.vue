<template>
  <div>
    <HomeSection></HomeSection>
    <AboutSection></AboutSection>
    <MenuSection></MenuSection>
    <ServiceSection></ServiceSection>
    <FooterSection></FooterSection>
  </div>
</template>

<script>
import FooterSection from '../components/FooterSection'
import ServiceSection from '../components/ServiceSection'
import MenuSection from '../components/MenuSection'
import AboutSection from '../components/AboutSection'
import HomeSection from '../components/HomeSection'
import {watch} from 'vue'
import user from '../composables/user'
import {useRouter} from 'vue-router'
export default {
  components: {
    FooterSection,
    ServiceSection,
    MenuSection,
    AboutSection, HomeSection },
    name: 'Home',

    setup(){
      let router=useRouter();
      watch(user, () => {
        router.push('/createUserAccount')
      })
    }
}
</script>
