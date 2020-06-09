<template>
  <div class="store">
    <mt-header fixed title="店铺名称">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="zz">
      <div class="storetop">
        <img src="../assets/img/wx6.jpg" alt>
        <img class="head" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt>
      </div>
      <div class="body">
        <div class="a1">
          <div class="storename">店铺名称</div>
          <div class="pj">评价4.4 月售4444单 疯鸟快送约21分钟</div>
          <div class="mj">
            <span>满减</span>满10减4 满25减15 满40减21 满60减30
          </div>
        </div>
        <div class="a2">
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">点餐</mt-tab-item>
            <mt-tab-item id="2">评价</mt-tab-item>
            <mt-tab-item id="3">商家</mt-tab-item>
          </mt-navbar>

          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
               <diancan></diancan>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <dianpin></dianpin>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <shangjia></shangjia>
            </mt-tab-container-item>
            
           </mt-tab-container>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import diancan from "./diancan.vue";
import dianpin from "./dianpin.vue";
import shangjia from "./shangjia.vue";
import "../assets/mui/js/mui.js"
export default {
    n: 1,
  data() {
    return {
      selected: "1"
    };
  },
    components: {
    diancan,
    dianpin,
    shangjia
  }
}
</script>

<style lang="scss">
.store {
  .zz {
    padding-top: 40px;
    background-color: rgb(253, 253, 253);
    .storetop {
      width: 100%;
      height: 100px;
      position: relative;
      img {
        width: 100%;
        height: 100px;
      }
      .head {
        border: 2px solid #ccc;
        position: absolute;
        top: 40px;
        left: 150px;
        width: 70px;
        height: 70px;
      }
    }
    .body {
      .a1 {
        margin-top: 20px;
        padding-bottom: 5px;
        .storename {
          text-align: center;
          font-size: 16px;
          color: rgb(102, 102, 102);
        }
        .pj {
          text-align: center;
          font-size: 12px;
          color: rgb(139, 139, 139);
        }
        .mj {
          font-size: 13px;
          text-align: center;
          color: rgb(105, 105, 105);
          span {
            border: 1px solid red;
            color: red;
            font-size: 13px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>