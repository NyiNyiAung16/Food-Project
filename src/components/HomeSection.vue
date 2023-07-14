<template>
  <div class="homeSection">
    <div class="home-text">
        <h1>My F*cking Restaurant</h1>
        <h2>Food The <br> Most Precious Thing</h2>
        <router-link to="#" class="btn">Today's Menu</router-link>
    </div>
    <div class="home-img">
        <img src="../../Img/home.png" alt="home" >
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped> 
    .homeSection{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 15px;
        align-items: center;
        box-sizing: border-box;
        padding: 50px 15%;
        width: 100%;
        margin-top: 2%;
    }
    .home-text h1{
        color: rgb(255, 94, 0);
        font-weight: 700;
        font-size: 5rem;
    }
    .home-text h2{
        color: #fff;
        font-size: 2rem;
    }
    .home-img{
        max-width: 400px;
    }
    .home-img img{
        width: 100%;
        margin-left: 100px;
    }
    .btn{
        background: rgb(255, 94, 0);
        text-decoration: none;
        padding: 10px;
        border-radius: 10px;
        border: none;
        color: #1e193a;
        transition: 0.4s ease;
    }
    .btn:hover{
        color: #fff;
    }
</style>