<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/timg4.png" alt>
          <div class="content2">欢迎使用山寨饿了么</div>
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/timg2.png" alt>
          <div class="content1">
          <div class="con1">吃什么外卖</div>
          <div class="con2">吃饭堂才是真爱</div>
          </div>
        </div>
        <div class="swiper-slide">
          <img class="img3" src="../assets/img/dh2.png" alt>
          
          <van-button class="btn" type="primary" url="/home">点击进入体验</van-button>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import Swiper from "swiper";

export default {
  name: "home",
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 20;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .btn {
    position: absolute;
    top: 83%;
    left: 33%;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid white;
    background-color: rgba(255, 255, 255, 0);
  }
  .text {
    
    .top {
        color: #fff;
        position: absolute;
        top: 50px;
        left: 25%;
        width: 150px;
        height: 150px;
        font-size: 22px;
        text-align: center;
        border: 3px solid white;
        border-radius: 50%;
        .aheader{
            width: 150px;
            height: 150px;
        }
    }
  }
  .content1{
        position: absolute;
        font-size: 28px;
        color: white;
        font-weight: bold;
        top: 60px;
        .con1{
            margin-bottom: 50px;
        }
  }
  .content2{
      position: absolute;
        font-size: 28px;
        color: white;
        font-weight: bold;
        top: 60px;
  }
}
</style>
