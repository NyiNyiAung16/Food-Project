<template>
  <div class="aboutSection">
    <div class="about-img">
        <img src="../../Img/about.png" alt="about">
    </div>
    <div class="about-text">
        <span>About Us</span>
        <h2>We Speak The Good <br> Food Language</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <button class="btn"><router-link to="#">Know More</router-link></button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .aboutSection{
        width: 100%;
        display: grid;
        grid-template-columns:repeat(2,1fr);
        align-items: center;
        padding: 70px 15%;
        box-sizing: border-box;
    }
    .about-img{
        max-width: 400px;
    }
    .about-img img{
        width: 100%;
    }
    .about-text{
        max-width: 450px;
    }
    .about-text span{
        color: rgb(197, 132, 11);
        font-weight: bold;
    }
    .about-text h2{
        color: #fff;
        font-weight: bold;
    }
    .about-text p{
        color: #fff;
    }
    .btn{
        background: rgb(255, 94, 0);
        padding: 7px 15px;
        border: none;
        border-radius: 10px;
        margin: 0px;
    }
    .btn a{
        text-decoration: none;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        transition: 0.5s ease;
    }
    .btn a:hover{
        color: rgba(20, 23, 23, 0.838);
    }
        @media (max-width: 1200px) {
        .aboutSection{
            grid-template-columns:repeat(2,1fr);
            margin-top: 40px;
            gap: 20px;
        }
        .about-img {
            width: 300px;
        }
        .about-img img{
            /* margin: 20px 0px 0px 0px; */
        }
        .about-text h2{
            font-size: 1.5rem;
        }
    }
        @media (max-width: 800px) {
        .aboutSection{
            grid-template-columns: 1fr;
            margin-top: 40px;
        }
        .about-img {
            width: 290px;
        }
        .about-img img{
            margin: 20px 0px 0px 0px;
        }
        .about-text h2{
            font-size: 1.2rem;
        }
    }
</style>