<template>
  <div class="menuController">
    <div class="gap"></div>
    <div class="menu-nav">
        <h3>Food Menu</h3>
        <h2>Fresh and Tasty with great Price</h2>
    </div>
    <div class="boxController">
        <div class="box">
            <img src="../../Img/food1.png" alt="food">
            <h5>Chicken Burger</h5>
            <p>Crispy</p>
            <span>₹99</span>
            <button>Add to Cart</button>
            <i></i>
        </div>
        <div class="box">
            <img src="../../Img/food2.png" alt="food">
            <h5>Veg Burger</h5>
            <p>Tasty</p>
            <span>₹75</span>
            <button>Add to Cart</button>
            <i></i>
        </div>
        <div class="box">
            <img src="../../Img/food3.png" alt="food">
            <h5>Chicken Bucket</h5>
            <p>Yummy</p>
            <span>₹199</span>
            <button>Add to Cart</button>
            <i></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .gap{
        margin-top: 10px;
        width: 100%;
    }
    .menu-nav{
        text-align: center;
    }
    .menu-nav h3{
        color: rgb(255, 94, 0);
        font-weight: bold;
    }
    .menu-nav h2{
        color: #fff;
        font-size: 2rem;
        font-weight: bold;
    }
    .boxController{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(210px,auto));
        align-items: center;
        gap: 10px;
        padding: 30px 15%;
    }
    .box{
        display: flex;
        flex-direction: column;
        background: #feeee7;
        align-items: center;
        padding: 10px;
        border-radius: 5px;
    }
    .box img{
        width: 220px;
        height: 240px;
    }
    .box span{
        display: block;
        color: rgba(255, 119, 0, 0.82);
        font-size: 20px;
        font-weight: bold;
        margin-top: 4px;
    }
    .box span{
        margin-bottom: 10px;
    }
    .box h5{
        margin-bottom: 1px;
        font-size: 15px;
    }
    .box p{
        margin-top: 3px;
        margin-bottom: 2px;
        font-weight: 200;
    }
    .box button{
        background: rgb(255, 94, 0);
        color: #fff;
        padding: 8px 17px;
        border: none;
        border-radius: 5px;
        font-weight: bold;
    }

    /* responsive style */
    @media (max-width:700px) {
        .menu-nav h2{
            font-size: 1.4rem;
        }
        .box img{
            width: 150px;
            height: 170px;
        }
    }

</style>