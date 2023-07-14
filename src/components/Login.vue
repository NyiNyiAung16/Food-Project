<template>
    <form @submit.prevent="LoginAccount">
        <h3>Foods Restaurant</h3>
        <label>Email</label>
        <input type="email" v-model="email" required>
        <label>Password</label>
        <input type="password" v-model="password" required>
        <p>{{ error }}</p>
        <button>Login</button>
        <p>If you haven't already registered , pls <span @click="gotoLogin">SignIn</span> here</p>
    </form>
</template>

<script>
import { ref } from 'vue'
import login from '../composables/login'
import {useRouter} from 'vue-router'
export default {
    setup(props,context){
        let email=ref('');
        let password=ref('');
        let router=useRouter();

        let {error, loginAcc} = login();
        let LoginAccount=async ()=>{
            await loginAcc(email.value, password.value);
            email.value='';
            password.value='';
            router.push('/')
        }

        //switch component
        let gotoLogin=()=>{
            context.emit('switch');
        }

        return {LoginAccount, email, password, error, gotoLogin}
    }
}
</script>

<style>

</style>