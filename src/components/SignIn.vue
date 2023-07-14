<template>
    <form @submit.prevent="CreateAccount">
        <h3>Foods Restaurant</h3>
        <label>Display Name</label>
        <input type="text" v-model="displayName" required>
        <label>Email</label>
        <input type="email" v-model="email" required>
        <label>Password</label>
        <input type="password" v-model="password" required>
        <p>{{ error }}</p>
        <button>SignIn</button>
        <p>If you already register , pls <span @click="gotoSignIn">Login</span> here</p>
    </form>
</template>

<script>
import { ref } from 'vue'
import signIn from '../composables/signIn'
import {useRouter} from 'vue-router'
export default {
    setup(props,context){
        let displayName=ref('');
        let email=ref('');
        let password=ref('');
        let router=useRouter();

        let {error,create}=signIn();
        let CreateAccount=async()=>{
           await create(email.value,password.value,displayName.value);
           displayName.value='';
           email.value='';
           password.value='';
           router.push('/')
        }
        //switch component
        let gotoSignIn=()=>{
            context.emit('switchLogin');
        }

        return {displayName, email , password, CreateAccount, error, gotoSignIn}
    }
}
</script>

<style>
    form{
        max-width: 470px;
        margin:12%  auto 0px;
        padding: 20px 30px;
        box-sizing: border-box;
        background-color: #252543;
        border-radius: 10px;
        border: none;
    }
    label{
        display: block;
        color: #fff;
        font-size: 1.2rem;
        margin-top: 20px;
        margin-bottom: 10px;
        letter-spacing: 1px;
    }
    input{
        width: 100%;
        padding: 15px;
        border: none;
        border-radius: 5px;
        box-sizing: border-box;
    }
    button{
        display: block;
        margin: 20px auto;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        color: black;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.4s ease;
    }
    form p{
        color: #fff;
        text-align: center;
    }
    form p span{
        border: none;
        border-bottom: 2px solid orangered;
        color: rgb(81, 104, 160);
        cursor: pointer;
    }
    form h3{
        color: #ff5e00;
        text-align: center;
        font-size: 1.5rem;
    }




    button:hover{
        background: #35415f;
        color: #fff;
    }
    input:focus{
        outline: none;
    }
</style>