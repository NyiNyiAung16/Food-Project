<template>
  <div class="serviceController">
    <div class="gap"></div>
    <h3>Services</h3>
    <p>We Provide Best Quality Foods</p>
    <div class="s-boxController">
        <div class="s-box">
            <div class="s-img">
                <img src="../../Img/s1.png" alt="service">
            </div>
            <h4>Order</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <div class="s-box">
            <div class="s-img">
                <img src="../../Img/s3.png" alt="service">
            </div>
            <h4>Shipping</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <div class="s-box">
            <div class="s-img">
                <img src="../../Img/s2.png" alt="service">
            </div>
            <h4>Free Delivery</h4>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
    </div>
  </div>

    <!-- service footer -->
    <div class="gap"></div>
    <div class="serviceFooter">
        <h2>We Make <span>Quality Food</span> Everyday</h2>
        <button><router-link to="#">Let's talk</router-link></button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .gap{
        margin-top: 70px;
        height: 20px;
    }
    .serviceController{
        text-align: center;
    }
    .serviceController h3{
        color: rgba(255, 132, 0, 0.918);
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 3px;
    }
    .serviceController > p{
        color: #fff;
        font-size: 1.5rem;
        font-weight: bold;
        margin-top: 1px;
    }
    .s-boxController{
        /* display: flex;
        justify-content: center; */
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(210px,auto));
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-top: 70px;
    }
    .s-boxController h4{
        color: rgba(255, 132, 0, 0.918);
        font-size: 20px;
        font-weight: bold;
        margin-top: 4px;
    }
    .s-boxController p{
        color: #fff;
    }
    .s-box{
        max-width: 290px;
    }
    .s-img{
        width: 80px;
        margin: auto;
    }
    .s-img img{
        width: 100%;
    }

    /* service footer */
    .serviceFooter{
        max-width: 70%;
        margin: auto;
        text-align: center;
        box-sizing: border-box;
        background: #fff;
        padding: 40px 15%;
        border-radius: 10px;
        border: none;
    }
    .serviceFooter h2{
        color: rgb(39, 37, 37);
        font-weight: bolder;
        font-size: 2rem;
    }
    .serviceFooter span{
        color: #ff702a;
    }
    .serviceFooter button{
        max-width: 200px;
        padding: 10px 20px;
        background: #ff702a;
        border: none;
        border-radius: 5px;
        margin: 0 auto;
    }
    .serviceFooter button a{
        color: #fff;
        text-decoration: none;
    }

    /* dynamic style */
    @media (max-width:1000px) {
        .serviceFooter h2{
            font-size: 1.6rem;
        }
    }
    
    @media (max-width:600px) {
        .s-boxController{
            grid-template-columns: 1fr;
            justify-items: center;
            margin-top: 30px;
        }
    }
</style>