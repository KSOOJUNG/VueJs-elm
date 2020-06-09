<template>
  <div>
    <div class="store">
      <div class="dcimg">
        <img src="../assets/img/img-2.jpg" alt>
      </div>
      <div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="q" v-for="(item,i) in stores" :key="i">
              <div class="swiper-slide">
                <img :src="item.image" alt>
                <div class="mc">
                  <div>{{item.name}}</div>
                  <div style="color:rgb(243, 125, 28)">￥37.33</div>
                </div>
              </div>
            </div>

            <div class="swiper-slide q">
              <img src="../assets/img/list1.webp" alt>
            </div>
            <div class="swiper-slide q">
              <img src="../assets/img/list1.webp" alt>
            </div>
          </div>
        </div>
      </div>

      <hr style="margin: 5px 15px;">
      <!-- 侧栏导航 -->
      <div class="cl" >
        <!-- mui-fullscreen href="#1" -->
        <div class="mui-content mui-row" >
          <div class="mui-col-xs-3">
            
            <div
              id="segmentedControls"
              class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical"
             >
              <a v-for="(item,i) in datas" :key="i"
                 class="mui-control-item" 
                 :data-index="i"
                 href="#content1"
                 style="width:100%; text-decoration:none;font-size:13px;" >{{item.name}}</a>
              
              </div>
          </div>

          <!-- <div
            id="segmentedControlContents"
            class="mui-col-xs-9"
            style="border-left: 1px solid #c8c7cc;"
          >
            <div id="content1" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第1个选项卡子项-1</li>
                <li class="mui-table-view-cell">第1个选项卡子项-2</li>
                <li class="mui-table-view-cell">第1个选项卡子项-3</li>
                <li class="mui-table-view-cell">第1个选项卡子项-4</li>
                <li class="mui-table-view-cell">第1个选项卡子项-5</li>
                <li class="mui-table-view-cell">第1个选项卡子项-6</li>
                <li class="mui-table-view-cell">第1个选项卡子项-7</li>
                <li class="mui-table-view-cell">第1个选项卡子项-8</li>
                <li class="mui-table-view-cell">第1个选项卡子项-9</li>
                <li class="mui-table-view-cell">第1个选项卡子项-10</li>
                <li class="mui-table-view-cell">第1个选项卡子项-11</li>
                <li class="mui-table-view-cell">第1个选项卡子项-12</li>
                <li class="mui-table-view-cell">第1个选项卡子项-13</li>
                <li class="mui-table-view-cell">第1个选项卡子项-14</li>
                <li class="mui-table-view-cell">第1个选项卡子项-15</li>
                <li class="mui-table-view-cell">第1个选项卡子项-16</li>
                <li class="mui-table-view-cell">第1个选项卡子项-17</li>
                <li class="mui-table-view-cell">第1个选项卡子项-18</li>
                <li class="mui-table-view-cell">第1个选项卡子项-19</li>
                <li class="mui-table-view-cell">第1个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content2" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第2个选项卡子项-1</li>
                <li class="mui-table-view-cell">第2个选项卡子项-2</li>
                <li class="mui-table-view-cell">第2个选项卡子项-3</li>
                <li class="mui-table-view-cell">第2个选项卡子项-4</li>
                <li class="mui-table-view-cell">第2个选项卡子项-5</li>
                <li class="mui-table-view-cell">第2个选项卡子项-6</li>
                <li class="mui-table-view-cell">第2个选项卡子项-7</li>
                <li class="mui-table-view-cell">第2个选项卡子项-8</li>
                <li class="mui-table-view-cell">第2个选项卡子项-9</li>
                <li class="mui-table-view-cell">第2个选项卡子项-10</li>
                <li class="mui-table-view-cell">第2个选项卡子项-11</li>
                <li class="mui-table-view-cell">第2个选项卡子项-12</li>
                <li class="mui-table-view-cell">第2个选项卡子项-13</li>
                <li class="mui-table-view-cell">第2个选项卡子项-14</li>
                <li class="mui-table-view-cell">第2个选项卡子项-15</li>
                <li class="mui-table-view-cell">第2个选项卡子项-16</li>
                <li class="mui-table-view-cell">第2个选项卡子项-17</li>
                <li class="mui-table-view-cell">第2个选项卡子项-18</li>
                <li class="mui-table-view-cell">第2个选项卡子项-19</li>
                <li class="mui-table-view-cell">第2个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content3" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第3个选项卡子项-1</li>
                <li class="mui-table-view-cell">第3个选项卡子项-2</li>
                <li class="mui-table-view-cell">第3个选项卡子项-3</li>
                <li class="mui-table-view-cell">第3个选项卡子项-4</li>
                <li class="mui-table-view-cell">第3个选项卡子项-5</li>
                <li class="mui-table-view-cell">第3个选项卡子项-6</li>
                <li class="mui-table-view-cell">第3个选项卡子项-7</li>
                <li class="mui-table-view-cell">第3个选项卡子项-8</li>
                <li class="mui-table-view-cell">第3个选项卡子项-9</li>
                <li class="mui-table-view-cell">第3个选项卡子项-10</li>
                <li class="mui-table-view-cell">第3个选项卡子项-11</li>
                <li class="mui-table-view-cell">第3个选项卡子项-12</li>
                <li class="mui-table-view-cell">第3个选项卡子项-13</li>
                <li class="mui-table-view-cell">第3个选项卡子项-14</li>
                <li class="mui-table-view-cell">第3个选项卡子项-15</li>
                <li class="mui-table-view-cell">第3个选项卡子项-16</li>
                <li class="mui-table-view-cell">第3个选项卡子项-17</li>
                <li class="mui-table-view-cell">第3个选项卡子项-18</li>
                <li class="mui-table-view-cell">第3个选项卡子项-19</li>
                <li class="mui-table-view-cell">第3个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content4" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第4个选项卡子项-1</li>
                <li class="mui-table-view-cell">第4个选项卡子项-2</li>
                <li class="mui-table-view-cell">第4个选项卡子项-3</li>
                <li class="mui-table-view-cell">第4个选项卡子项-4</li>
                <li class="mui-table-view-cell">第4个选项卡子项-5</li>
                <li class="mui-table-view-cell">第4个选项卡子项-6</li>
                <li class="mui-table-view-cell">第4个选项卡子项-7</li>
                <li class="mui-table-view-cell">第4个选项卡子项-8</li>
                <li class="mui-table-view-cell">第4个选项卡子项-9</li>
                <li class="mui-table-view-cell">第4个选项卡子项-10</li>
                <li class="mui-table-view-cell">第4个选项卡子项-11</li>
                <li class="mui-table-view-cell">第4个选项卡子项-12</li>
                <li class="mui-table-view-cell">第4个选项卡子项-13</li>
                <li class="mui-table-view-cell">第4个选项卡子项-14</li>
                <li class="mui-table-view-cell">第4个选项卡子项-15</li>
                <li class="mui-table-view-cell">第4个选项卡子项-16</li>
                <li class="mui-table-view-cell">第4个选项卡子项-17</li>
                <li class="mui-table-view-cell">第4个选项卡子项-18</li>
                <li class="mui-table-view-cell">第4个选项卡子项-19</li>
                <li class="mui-table-view-cell">第4个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content5" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第5个选项卡子项-1</li>
                <li class="mui-table-view-cell">第5个选项卡子项-2</li>
                <li class="mui-table-view-cell">第5个选项卡子项-3</li>
                <li class="mui-table-view-cell">第5个选项卡子项-4</li>
                <li class="mui-table-view-cell">第5个选项卡子项-5</li>
                <li class="mui-table-view-cell">第5个选项卡子项-6</li>
                <li class="mui-table-view-cell">第5个选项卡子项-7</li>
                <li class="mui-table-view-cell">第5个选项卡子项-8</li>
                <li class="mui-table-view-cell">第5个选项卡子项-9</li>
                <li class="mui-table-view-cell">第5个选项卡子项-10</li>
                <li class="mui-table-view-cell">第5个选项卡子项-11</li>
                <li class="mui-table-view-cell">第5个选项卡子项-12</li>
                <li class="mui-table-view-cell">第5个选项卡子项-13</li>
                <li class="mui-table-view-cell">第5个选项卡子项-14</li>
                <li class="mui-table-view-cell">第5个选项卡子项-15</li>
                <li class="mui-table-view-cell">第5个选项卡子项-16</li>
                <li class="mui-table-view-cell">第5个选项卡子项-17</li>
                <li class="mui-table-view-cell">第5个选项卡子项-18</li>
                <li class="mui-table-view-cell">第5个选项卡子项-19</li>
                <li class="mui-table-view-cell">第5个选项卡子项-20</li>
              </ul>
            </div>
          </div>-->
          <div
            id="segmentedControlContents"
            class="mui-col-xs-9"
            style="border-left: 1px solid #c8c7cc;"
            
          >
            <div id="content1" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第1个选项卡子项-1</li>
                <li class="mui-table-view-cell">第1个选项卡子项-2</li>
                <li class="mui-table-view-cell">第1个选项卡子项-3</li>
                <li class="mui-table-view-cell">第1个选项卡子项-4</li>
                <li class="mui-table-view-cell">第1个选项卡子项-5</li>
                <li class="mui-table-view-cell">第1个选项卡子项-6</li>
                <li class="mui-table-view-cell">第1个选项卡子项-7</li>
                <li class="mui-table-view-cell">第1个选项卡子项-8</li>
                <li class="mui-table-view-cell">第1个选项卡子项-9</li>
                <li class="mui-table-view-cell">第1个选项卡子项-10</li>
                <li class="mui-table-view-cell">第1个选项卡子项-11</li>
                <li class="mui-table-view-cell">第1个选项卡子项-12</li>
                <li class="mui-table-view-cell">第1个选项卡子项-13</li>
                <li class="mui-table-view-cell">第1个选项卡子项-14</li>
                <li class="mui-table-view-cell">第1个选项卡子项-15</li>
                <li class="mui-table-view-cell">第1个选项卡子项-16</li>
                <li class="mui-table-view-cell">第1个选项卡子项-17</li>
                <li class="mui-table-view-cell">第1个选项卡子项-18</li>
                <li class="mui-table-view-cell">第1个选项卡子项-19</li>
                <li class="mui-table-view-cell">第1个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content2" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第2个选项卡子项-1</li>
                <li class="mui-table-view-cell">第2个选项卡子项-2</li>
                <li class="mui-table-view-cell">第2个选项卡子项-3</li>
                <li class="mui-table-view-cell">第2个选项卡子项-4</li>
                <li class="mui-table-view-cell">第2个选项卡子项-5</li>
                <li class="mui-table-view-cell">第2个选项卡子项-6</li>
                <li class="mui-table-view-cell">第2个选项卡子项-7</li>
                <li class="mui-table-view-cell">第2个选项卡子项-8</li>
                <li class="mui-table-view-cell">第2个选项卡子项-9</li>
                <li class="mui-table-view-cell">第2个选项卡子项-10</li>
                <li class="mui-table-view-cell">第2个选项卡子项-11</li>
                <li class="mui-table-view-cell">第2个选项卡子项-12</li>
                <li class="mui-table-view-cell">第2个选项卡子项-13</li>
                <li class="mui-table-view-cell">第2个选项卡子项-14</li>
                <li class="mui-table-view-cell">第2个选项卡子项-15</li>
                <li class="mui-table-view-cell">第2个选项卡子项-16</li>
                <li class="mui-table-view-cell">第2个选项卡子项-17</li>
                <li class="mui-table-view-cell">第2个选项卡子项-18</li>
                <li class="mui-table-view-cell">第2个选项卡子项-19</li>
                <li class="mui-table-view-cell">第2个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content3" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第3个选项卡子项-1</li>
                <li class="mui-table-view-cell">第3个选项卡子项-2</li>
                <li class="mui-table-view-cell">第3个选项卡子项-3</li>
                <li class="mui-table-view-cell">第3个选项卡子项-4</li>
                <li class="mui-table-view-cell">第3个选项卡子项-5</li>
                <li class="mui-table-view-cell">第3个选项卡子项-6</li>
                <li class="mui-table-view-cell">第3个选项卡子项-7</li>
                <li class="mui-table-view-cell">第3个选项卡子项-8</li>
                <li class="mui-table-view-cell">第3个选项卡子项-9</li>
                <li class="mui-table-view-cell">第3个选项卡子项-10</li>
                <li class="mui-table-view-cell">第3个选项卡子项-11</li>
                <li class="mui-table-view-cell">第3个选项卡子项-12</li>
                <li class="mui-table-view-cell">第3个选项卡子项-13</li>
                <li class="mui-table-view-cell">第3个选项卡子项-14</li>
                <li class="mui-table-view-cell">第3个选项卡子项-15</li>
                <li class="mui-table-view-cell">第3个选项卡子项-16</li>
                <li class="mui-table-view-cell">第3个选项卡子项-17</li>
                <li class="mui-table-view-cell">第3个选项卡子项-18</li>
                <li class="mui-table-view-cell">第3个选项卡子项-19</li>
                <li class="mui-table-view-cell">第3个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content4" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第4个选项卡子项-1</li>
                <li class="mui-table-view-cell">第4个选项卡子项-2</li>
                <li class="mui-table-view-cell">第4个选项卡子项-3</li>
                <li class="mui-table-view-cell">第4个选项卡子项-4</li>
                <li class="mui-table-view-cell">第4个选项卡子项-5</li>
                <li class="mui-table-view-cell">第4个选项卡子项-6</li>
                <li class="mui-table-view-cell">第4个选项卡子项-7</li>
                <li class="mui-table-view-cell">第4个选项卡子项-8</li>
                <li class="mui-table-view-cell">第4个选项卡子项-9</li>
                <li class="mui-table-view-cell">第4个选项卡子项-10</li>
                <li class="mui-table-view-cell">第4个选项卡子项-11</li>
                <li class="mui-table-view-cell">第4个选项卡子项-12</li>
                <li class="mui-table-view-cell">第4个选项卡子项-13</li>
                <li class="mui-table-view-cell">第4个选项卡子项-14</li>
                <li class="mui-table-view-cell">第4个选项卡子项-15</li>
                <li class="mui-table-view-cell">第4个选项卡子项-16</li>
                <li class="mui-table-view-cell">第4个选项卡子项-17</li>
                <li class="mui-table-view-cell">第4个选项卡子项-18</li>
                <li class="mui-table-view-cell">第4个选项卡子项-19</li>
                <li class="mui-table-view-cell">第4个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content5" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第5个选项卡子项-1</li>
                <li class="mui-table-view-cell">第5个选项卡子项-2</li>
                <li class="mui-table-view-cell">第5个选项卡子项-3</li>
                <li class="mui-table-view-cell">第5个选项卡子项-4</li>
                <li class="mui-table-view-cell">第5个选项卡子项-5</li>
                <li class="mui-table-view-cell">第5个选项卡子项-6</li>
                <li class="mui-table-view-cell">第5个选项卡子项-7</li>
                <li class="mui-table-view-cell">第5个选项卡子项-8</li>
                <li class="mui-table-view-cell">第5个选项卡子项-9</li>
                <li class="mui-table-view-cell">第5个选项卡子项-10</li>
                <li class="mui-table-view-cell">第5个选项卡子项-11</li>
                <li class="mui-table-view-cell">第5个选项卡子项-12</li>
                <li class="mui-table-view-cell">第5个选项卡子项-13</li>
                <li class="mui-table-view-cell">第5个选项卡子项-14</li>
                <li class="mui-table-view-cell">第5个选项卡子项-15</li>
                <li class="mui-table-view-cell">第5个选项卡子项-16</li>
                <li class="mui-table-view-cell">第5个选项卡子项-17</li>
                <li class="mui-table-view-cell">第5个选项卡子项-18</li>
                <li class="mui-table-view-cell">第5个选项卡子项-19</li>
                <li class="mui-table-view-cell">第5个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content6" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第6个选项卡子项-1</li>
                <li class="mui-table-view-cell">第6个选项卡子项-2</li>
                <li class="mui-table-view-cell">第6个选项卡子项-3</li>
                <li class="mui-table-view-cell">第6个选项卡子项-4</li>
                <li class="mui-table-view-cell">第6个选项卡子项-5</li>
                <li class="mui-table-view-cell">第6个选项卡子项-6</li>
                <li class="mui-table-view-cell">第6个选项卡子项-7</li>
                <li class="mui-table-view-cell">第6个选项卡子项-8</li>
                <li class="mui-table-view-cell">第6个选项卡子项-9</li>
                <li class="mui-table-view-cell">第6个选项卡子项-10</li>
                <li class="mui-table-view-cell">第6个选项卡子项-11</li>
                <li class="mui-table-view-cell">第6个选项卡子项-12</li>
                <li class="mui-table-view-cell">第6个选项卡子项-13</li>
                <li class="mui-table-view-cell">第6个选项卡子项-14</li>
                <li class="mui-table-view-cell">第6个选项卡子项-15</li>
                <li class="mui-table-view-cell">第6个选项卡子项-16</li>
                <li class="mui-table-view-cell">第6个选项卡子项-17</li>
                <li class="mui-table-view-cell">第6个选项卡子项-18</li>
                <li class="mui-table-view-cell">第6个选项卡子项-19</li>
                <li class="mui-table-view-cell">第6个选项卡子项-20</li>
              </ul>
            </div>
            <div id="content7" class="mui-control-content">
              <ul class="mui-table-view">
                <li class="mui-table-view-cell">第7个选项卡子项-1</li>
                <li class="mui-table-view-cell">第7个选项卡子项-2</li>
                <li class="mui-table-view-cell">第7个选项卡子项-3</li>
                <li class="mui-table-view-cell">第7个选项卡子项-4</li>
                <li class="mui-table-view-cell">第7个选项卡子项-5</li>
                <li class="mui-table-view-cell">第7个选项卡子项-6</li>
                <li class="mui-table-view-cell">第7个选项卡子项-7</li>
                <li class="mui-table-view-cell">第7个选项卡子项-8</li>
                <li class="mui-table-view-cell">第7个选项卡子项-9</li>
                <li class="mui-table-view-cell">第7个选项卡子项-10</li>
                <li class="mui-table-view-cell">第7个选项卡子项-11</li>
                <li class="mui-table-view-cell">第7个选项卡子项-12</li>
                <li class="mui-table-view-cell">第7个选项卡子项-13</li>
                <li class="mui-table-view-cell">第7个选项卡子项-14</li>
                <li class="mui-table-view-cell">第7个选项卡子项-15</li>
                <li class="mui-table-view-cell">第7个选项卡子项-16</li>
                <li class="mui-table-view-cell">第7个选项卡子项-17</li>
                <li class="mui-table-view-cell">第7个选项卡子项-18</li>
                <li class="mui-table-view-cell">第7个选项卡子项-19</li>
                <li class="mui-table-view-cell">第7个选项卡子项-20</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import mui from "../assets/mui/js/mui.js";
import "../assets/mui/css/mui.min.css";

export default {
  data() {
    return {
      show:1,
      selected: "1",
      activeKey: 0,
      stores: [],
      datas:[],
      activeKey: 1
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      }
    });
    mui("mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    onChange(key) {
      this.activeKey = key;
    },

    onChange(key) {
      this.activeKey = key;
    },
    getdata() {
      var _this = this;
      // store=[];
      return new Promise(function(resolve, reject) {
        _this.axios
          .get("http://127.0.0.1:3000/api/goods")
          .then(function(res) {
            // var thisa=_this;
            // console.log(res.data.data[0].foods[0].name);
            for (var i = 0; i < res.data.data.length; i++) {
              for (var k = 0; k < res.data.data[i].foods.length; k++) {
                _this.stores.push(res.data.data[i].foods[k]);
                // console.log(_this.stores);
              }
            }
            resolve(_this.stores);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
      
    },
    getdatas() {
      var _this = this;
      // store=[];
      
      return new Promise(function(resolve,reject){
        _this.axios.get("http://127.0.0.1:3000/api/goods").then(function(res){
          // var thisa=_this;
            //  console.log(res.data.data);
             for(var i=0; i<res.data.data.length;i++){
                _this.datas.push(res.data.data[i]);
                // console.log(res.data.data[i].foods[k]);
             }
            resolve(_this.datas);
         }).catch(function (error) {
             console.log(error);
         });
      })
    }
  },
  async created() {
    this.stores = await this.getdata();
    this.datas = await this.getdatas();
    // console.log(this.datas);
  }
};
</script>

<style lang="scss" >
// 侧栏

.cl {
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid #ccc;

}

.mui-segmented-control.mui-segmented-control-inverted.mui-segmented-control-vertical
  .mui-control-item.mui-active {
  background-color: rgb(249, 251, 252);
}

.q {
  width: 120px;
  padding: 0 10px;
  .swiper-slide {
    width: 120px;
    img {
      width: 100px;
      height: 100px;
    }
    .mc {
      font-size: 13px;
      // margin-top: 5px;
      margin-left: 5px;
    }
  }
}
.swiper-container {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 140px;
  z-index: 20;
}

.store {
  .dcimg {
    width: 100%;
    height: 80px;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 5px;
    background-color: rgb(253, 253, 253);
    img {
      width: 98%;

      height: 80px;
    }
  }
}
</style>