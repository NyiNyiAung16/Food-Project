<template>
  <div class="navbar">
    <h2>Foods</h2>
    <div class="active" ><i class="fas fa-bars" @click="showNav"></i></div>
    <ul class="navbarMenu" :class="{showNavbar:show}">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/service">Services</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><button @click="Logout">Logout</button></li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import {auth, signOut} from '../firebase/config'
export default {
    setup(){
        let Logout=async () => {
            await signOut(auth);
        }
        let show=ref(false)
        let showNav= () => {
            show.value=!show.value
            console.log(show.value)
        }


        return { Logout,showNav, show };
    }
}
</script>

<style scoped>
    .navbar{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 10px 30px;
        background: rgb(37, 37, 67);
        color: #ad5e10;
        position: fixed;
        top: 0;
        box-shadow:0px 1px 15px #46256f;
        box-sizing: border-box;
    }
    .navbarMenu{
        display: flex;
        gap: 15px;
        list-style: none;
    }
    li a{
        text-decoration: none;
        color: #fff;
        transition: 0.4s ease;
    }
    li a:hover{
        color: rgb(255, 94, 0);
    }
    .navbar h2{
        color: rgb(255, 94, 0);
    }
    .navbarMenu button{
        margin: 0px;
        margin-left: 5px;
    }
    .active{
        display: none;
        font-size: 30px;
    }
    @media (max-width: 700px) {
        .active{
            display: block;
            align-self: center;
            cursor: pointer;
        }
        .active:hover{
            color: #fff;
        }
        .navbarMenu{
            display: none;
        }
        .showNavbar{
            display: block;
            text-align: center;
            width: 200px;
            padding: 10px 20px;
            background: #46256f;
            border-radius: 10px;
            position: absolute;
            top: 70px;
            right: 0;
            animation: fade 0.5s  ease;
        }
        @keyframes fade {
            from{transform: translatex(-200px);opacity: 0;}
            to{transform: translatex(0px);opacity: 1;}
        }
        .showNavbar li{
            display: block;
            margin: 10px 0px;
            width: 100%;
            font-size: 20px;
            /* padding: 5px 20px; */
        }
        .showNavbar li button {
            margin: 0 auto;
            font-size: 15px;
            padding: 10px 15px;
        }
    }
</style>