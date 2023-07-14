<template>
    <form>
        <label>Display Name</label>
        <input type="text" v-model="displayName">
        <label>Email</label>
        <input type="email" v-model="email">
        <label>Password</label>
        <input type="password" v-model="password">
        <button>SignIn</button>
        <p>If you already register , pls <span>Login</span> here</p>
    </form>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        let displayName=ref('');
        let email=ref('');
        let password=ref('');


        return {displayName, email , password}
    }
}
</script>

<style>
    form{
        max-width: 470px;
        margin:15% auto;
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





    button:hover{
        background: #35415f;
        color: #fff;
    }
    input:focus{
        outline: none;
    }
</style>