<template>
  <div class="navbar">
    <h2>Foods</h2>
    <ul class="navbarMenu">
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
import {auth, signOut} from '../firebase/config'
export default {
    setup(){
        let Logout=async () => {
            await signOut(auth);
        }

        return { Logout };
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
</style>