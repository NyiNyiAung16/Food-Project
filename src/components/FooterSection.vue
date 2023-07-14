<template>
  <div class="footerSection">
    <div class="f-box">
        <h1>Menu Links</h1>
        <div class="bar"></div>
        <ul class="link">
            <li><router-link to="#">Home</router-link></li>
            <li><router-link to="#">Menu</router-link></li>
            <li><router-link to="#">About</router-link></li>
            <li><router-link to="#">Service</router-link></li>
            <li><router-link to="#">Contact</router-link></li>
        </ul>
    </div>
    <div class="f-box">
        <h1>Our Specility</h1>
        <div class="bar"></div>
        <ul class="link">
            <li><router-link to="#">Home Delivery</router-link></li>
            <li><router-link to="#">Veg and Non-Veg</router-link></li>
            <li><router-link to="#">Call Support</router-link></li>
            <li><router-link to="#">Fresh Food</router-link></li>
            <li><router-link to="#">Mon-Sat(9:00-22:00)</router-link></li>
        </ul>
    </div>
    <div class="f-box">
        <h1>Information</h1>
        <div class="bar"></div>
        <ul class="link">
            <li><router-link to="#">About Us</router-link></li>
            <li><router-link to="#">Delivery Info</router-link></li>
            <li><router-link to="#">Privacy Policy</router-link></li>
            <li><router-link to="#">Terms & Conditions</router-link></li>
            <li><router-link to="#">Contact</router-link></li>
        </ul>
    </div>
    <div class="f-box">
        <h1>Follow Us</h1>
        <div class="bar"></div>
        <div class="icon">
            <router-link to="#"><span><i class="fab fa-facebook"></i></span></router-link>
            <router-link to="#"><span><i class="fab fa-instagram"></i></span></router-link>
            <router-link to="#"><span><i class="fab fa-twitter"></i></span></router-link>
            <router-link to="#"><span><i class="fab fa-youtube"></i></span></router-link>
        </div>
    </div>
  </div>

  <div class="footerLink">
    <div class="footerBox">
        <p>If you wanna contact me and also wanna get my idea , pls click under links.</p>
        <router-link to="#"><i class="fab fa-github"></i></router-link>
        <router-link to="#"><i class="fab fa-linkedin"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footerSection{
        max-width: 75%;
        display: flex;
        justify-content: center;
        background: #263238;
        margin: auto;
        gap: 8%;
        margin-top: 7%;
    }
    .bar{
        border: 2px solid orangered;
    }
    .f-box h1{
        color: #edd3bb;
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    .f-box .link{
        list-style: none;
    }
    .f-box .link li{
        transition: 0.5s ease;
    }
    .f-box .link li a{
        color: #9391a0;
        transition: 0.5s ease;
    }
    .f-box .link li:not(:last-child){
        margin-bottom: 15px;
    }
    .f-box .link li a:hover{
        color: #fff;
    }
    .f-box .link li:hover{
        color: orange;
        transform: translateX(-10px);
    }
    .f-box .icon{
        display: grid;
        grid-template-columns: repeat(2,50px);
        margin: 20px auto;
        gap: 20px;
    }
    .f-box .icon span i{
        font-size: 30px;
        color: #fff;
        transition: 0.4s ease;
    }
    .f-box .icon span i:hover{
        color: orangered;
        transform: scale(1.2);
    }
    .footerLink{
        background: #252440;
        padding: 30px 30%;
        margin-top: 7%;
    }
    .footerBox {
        text-align: center;
    }
    .footerBox > p{
        color: rgba(255, 68, 0, 0.84);
        font-size: 1.3rem;
        font-weight: bold;
    }
    .footerBox i{
        color: #fff;
        font-size: 40px;
        margin-left: 30px;
        transition: 0.4s ease;
    }
    .footerBox i:hover{
        color: orangered;
    }
</style>