<template>
  <div class="about">
    <mt-header fixed title="我的">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="zz">
      <div class="header">
        <div class="left">
          <img src="../assets/img/header.jpg" alt>
        </div>
        <div class="right">
          <p>用户名</p>
          <span class="glyphicon glyphicon-menu-right"></span>
          <div>
            <span class="glyphicon glyphicon-phone-alt"></span>
            <p>123456789</p>
          </div>
        </div>
      </div>

      <div class="orther">
        <div class="left">
          <div class="h">
            <span>2</span>个
          </div>
          <div>红包</div>
        </div>
        <div class="right">
          <div class="g">
            <span>285</span>个
          </div>
          <div>金币</div>
        </div>
      </div>

      <div class="wx4">
        <img src="../assets/img/wx4.jpg" alt>
      </div>

      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="glyphicon glyphicon-send"></span>
            我的地址
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="glyphicon glyphicon-lock" style="color: rgb(62, 214, 83);"></span>
            金币商品
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="glyphicon glyphicon-headphones"></span>
            我的客服
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a class="mui-navigate-right">
            <span class="glyphicon glyphicon-list-alt"></span>
            规则中心
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .zz {
    padding-top: 40px;
  }
  .glyphicon {
    color: rgb(72, 184, 248);
  }
  .header {
    height: 120px;
    background-color: rgb(55, 181, 253);
    .left {
      width: 40%;
      height: 100%;
      text-align: center;
      float: left;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-top: 25px;
      }
    }
    .right {
      width: 60%;
      height: 120px;
      float: left;
      p {
        display: block;
        padding-top: 30px;
        font-size: 22px;
        color: white;
      }
      .glyphicon-menu-right {
        color: white;
        font-size: 24px;
        float: right;
        margin-right: 10px;
        margin-top: -20px;
      }
      div {
        width: 60%;
        span {
          color: white;
          display: block;
          font-size: 14px;
          float: left;
        }
        p {
          font-size: 14px;
          padding-top: 0px;
          padding-left: 20px;
        }
      }
    }
  }
  .orther {
    width: 100%;
    height: 100px;
    background-color: rgb(248, 247, 247);

    .left {
      width: 50%;
      height: 100%;
      border: 1px solid rgb(158, 158, 158);
      float: left;
      text-align: center;
      padding-top: 25px;
      .h {
        color: red;
        span {
          font-size: 26px;
        }
      }
    }
    .right {
      width: 50%;
      height: 100%;
      border: 1px solid rgb(158, 158, 158);
      border-left: 0;
      float: left;
      text-align: center;
      padding-top: 25px;
      .g {
        color: rgb(62, 214, 83);
        span {
          font-size: 26px;
        }
      }
    }
  }
  .wx4 {
    height: 80px;
    margin: 3px 2px;
    img {
      width: 100%;
      height: 80px;
    }
  }
  .mui-table-view{
    li{
      margin: 0;
    }
  }
}
</style>
