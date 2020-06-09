<template>
  <div class="hello">
    <div>
      <mt-header fixed title="饿了吗" style="padding-bottom:0;">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right">
          <span class="glyphicon glyphicon-share"></span>
        </mt-button>
      </mt-header>

      <div class="zz">
        <div class="search">
          <div class="inp">
            <router-link to="/address">
            <div class="dress">
              <span class="mui-icon mui-icon-location" style="font-size:14px; padding-top:5px;"></span>
              <div>
                粤嵌众创空间
                <span class="glyphicon glyphicon-triangle-bottom" style="font-size:12px;"></span>
              </div>
            </div>
            </router-link>
            <div class="mui-input-row mui-search">
              <input type="search" class="mui-input-clear" placeholder="搜索">
            </div>
          </div>
        </div>

        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="item in imglist" :key="item">
            <img :src="item" alt>
          </mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
          <div class="mui-row">
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list1.webp" alt>
                <p>商品便利</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list2.webp" alt>
                <p>水果</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list3.webp" alt>
                <p>医药健康</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list4.webp" alt>
                <p>烂漫鲜花</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list1.webp" alt>
                <p>心选好店</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list2.webp" alt>
                <p>厨房生鲜</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list1.webp" alt>
                <p>天天领红包</p>
              </div>
            </div>
            <div class="mui-col-sm-3 mui-col-xs-3">
              <div class="contentList">
                <img src="../assets/img/list2.webp" alt>
                <p>厨房生鲜</p>
              </div>
            </div>
          </div>
        </div>

        <div class="wx14">
          <img src="../assets/img/wx14.jpg" alt>
        </div>

        <div class="wx2">
          <img src="../assets/img/wx2.jpg" alt>
          <img src="../assets/img/wx2.jpg" alt>
        </div>

        <div class="wx3">
          <img src="../assets/img/wx3.jpg" alt>
        </div>

        <mt-swipe :auto="4000" style="margin:2px;">
          <mt-swipe-item v-for="item in imglist2" :key="item">
            <img :src="item" alt>
          </mt-swipe-item>
        </mt-swipe>

        <div class="tuijian">
          <p>———— 推荐商家 ————</p>
        </div>
        <div>
          <mt-navbar v-model="selected">
            <mt-tab-item id="1">综合排序</mt-tab-item>
            <mt-tab-item id="2">距离最近</mt-tab-item>
            <mt-tab-item id="3">品质联盟</mt-tab-item>
            <mt-tab-item id="4">
              筛选
              <span class="glyphicon glyphicon-tasks"></span>
            </mt-tab-item>
          </mt-navbar>

          <!-- tab-container -->
          <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
              <div class="store">
                <div class="store1" v-for="(item,i) in stores" :key="i">
                  <router-link to="/stores">
                    <div class="storeleft">
                      <img :src="item.image" alt>
                    </div>
                    <div class="storeright">
                      <div class="right">
                        <div class="name">{{item.name}}</div>
                        <div class="money">
                          <van-rate :size="10" v-model="value" allow-half void-icon="star" void-color="#eee"/>月售312单
                        </div>
                        <div class="money">￥20元起送 | 配送费2.5元<div class="min">21km | 24分钟</div> </div>
                        <div class="bottom">
                          <van-tag round type="danger">美食节</van-tag>
                          <van-tag color="rgb(119, 119, 118)" plain>支持自取</van-tag>
                        </div>
                        <hr>
                        <div class="bom">
                          <div class="man">
                            <van-tag type="danger" style="font-size:9px;">满</van-tag>在线支付满28减5
                          </div>
                          <div class="hy">
                            <span class="glyphicon glyphicon-warning-sign"></span>超级会员领6元无门槛领红包
                          </div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <div class="store">
                <div class="store1" v-for="(item,i) in stores" :key="i">
                  <router-link to="/stores">
                    <div class="storeleft">
                      <img :src="item.image" alt>
                    </div>
                    <div class="storeright">
                      <div class="right">
                        <div class="name">{{item.name}}</div>
                        <div class="money">
                          <van-rate :size="10" v-model="value" allow-half void-icon="star" void-color="#eee"/>月售312单
                        </div>
                        <div class="money">￥20元起送 | 配送费2.5元<div class="min">21km | 24分钟</div></div>
                        <div class="bottom">
                          <van-tag round type="danger">美食节</van-tag>
                          <van-tag color="rgb(119, 119, 118)" plain>坚持自取</van-tag>
                        </div>
                        <hr>
                        <div class="bom">
                          <div class="man">
                            <van-tag type="danger">满</van-tag>在线支付满28减5
                          </div>
                          <div class="hy">
                            <span class="glyphicon glyphicon-warning-sign"></span>超级会员领6元无门槛领红包
                          </div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <div class="store">
                <div class="store1" v-for="(item,i) in stores" :key="i">
                  <router-link to="/stores">
                    <div class="storeleft">
                      <img :src="item.image" alt>
                    </div>
                    <div class="storeright">
                      <div class="right">
                        <div class="name">{{item.name}}</div>
                        <div class="money">
                          <van-rate :size="10" v-model="value" allow-half void-icon="star" void-color="#eee"/>在线支付满28减5
                        </div>
                        <div class="money">￥20元起送 | 配送费2.5元<div class="min">21km | 24分钟</div></div>
                        <div class="bottom">
                          <van-tag round type="danger">美食节</van-tag>
                          <van-tag color="rgb(119, 119, 118)" plain>坚持自取</van-tag>
                        </div>
                        <hr>
                        <div class="bom">
                          <div class="man">
                            <van-tag type="danger">满</van-tag>{{item.man}}
                          </div>
                          <div class="hy">
                            <span class="glyphicon glyphicon-warning-sign"></span>超级会员领6元无门槛领红包
                          </div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                
              </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="4">
              <div class="store">
                <div class="store1" v-for="(item,i) in stores" :key="i">
                  <router-link to="/stores">
                    <div class="storeleft">
                      <img :src="item.image" alt>
                    </div>
                    <div class="storeright">
                      <div class="right">
                        <div class="name">{{item.name}}</div>
                        <div class="money">
                          <van-rate :size="10" v-model="value" allow-half void-icon="star" void-color="#eee"/>在线支付满28减5
                        </div>
                        <div class="money">￥20元起送 | 配送费2.5元<div class="min">21km | 24分钟</div></div>
                        <div class="bottom">
                          <van-tag round type="danger">美食节</van-tag>
                          <van-tag color="rgb(119, 119, 118)" plain>坚持自取</van-tag>
                        </div>
                        <hr>
                        <div class="bom">
                          <div class="man">
                            <van-tag type="danger">满</van-tag>{{item.man}}
                          </div>
                          <div class="hy">
                            <span class="glyphicon glyphicon-warning-sign"></span>超级会员领6元无门槛领红包
                          </div>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Redbag from "@/components/redbag.vue";
export default {
  n: 1,
  data() {
    return {
      imglist: [
        "../assets/img/wx10.jpg",
        "../assets/img/wx11.jpg",
        "../assets/img/wx12.jpg",
        "../assets/img/wx13.jpg"
      ],
      imglist2: [
        "../assets/img/wx9.jpg",
        "../assets/img/wx8.jpg",
        "../assets/img/wx7.jpg",
        "../assets/img/wx6.jpg"
      ],
      selected: "1",
      value: 2.5,
      stores:[
      ],
      storeds:[]
      

    };
  },
  methods: {
    dress() {
      this.$store.state.flag = false;
    },
    getdata(){
      // return this.axios.get("http://127.0.0.1:3000/api/goods").then(function(res){
      //       console.log(res);
            
      //   }).catch(function (error) {
      //       console.log(error);
      //   });
      var _this = this;
      // store=[];
      return new Promise(function(resolve,reject){
        _this.axios.get("http://127.0.0.1:3000/api/goods").then(function(res){
          // var thisa=_this;
             console.log(res.data.data);
             for(var i=0; i<res.data.data.length;i++){
               for(var k=0; k<res.data.data[i].foods.length;k++){
                _this.storeds.push(res.data.data[i].foods[k]);
                // console.log(res.data.data[i].foods[k]);
             }
             }
            resolve(_this.storeds);
         }).catch(function (error) {
             console.log(error);
         });
      })
    },
    getstore(){
      var _this = this;
      // store=[];
      return new Promise(function(resolve,reject){
        _this.axios.get("http://127.0.0.1:3000/api/seller").then(function(res){
             console.log(res.data.data.supports);
            for(var k=0; k<res.data.data.supports.length;k++){
                _this.stores.push(res.data.data.supports[k]);
                // console.log(res.data.data.supports[k]);
             }
            resolve(_this.stores);
         }).catch(function (error) {
             console.log(error);
         });
      })
    }
  },
  async created(){
    this.stores = await this.getdata();
    this.stores.storeds = await this.getstore();
    console.log(this.stores);
  },
  mounted(){
    
  },
  components: {
    // Redbag
  }
};
</script>

<style lang="scss" scoped>
.van-rate{
  float: left;
  margin-right: 5px;
  i{
    width: 10px;
    height: 10px;
  }
}
.van-tag {
  margin-right: 3px;
}
.hello {
  background-color: white;
  position: relative;
  .zz {
    padding-top: 45px;
  }
  .search {
    background-color: rgb(62, 172, 245);
    height: 70px;
    line-height: 35px;
    .inp {
      .dress {
        font-size: 14px;
        color: white;
        width: 100%;
        height: 30px;
        line-height: 30px;
        .mui-icon-location {
          margin: 5px;
          display: block;
          float: left;
        }
      }
      .mui-input-row {
        height: 45px;
        padding: 0;
        text-align: center;
        .mui-input-clear {
          background-color: white;
          width: 96%;
          height: 30px;
          margin: 0;
        }
      }
    }
  }
  .mint-swipe {
    height: 130px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .contentList {
    text-align: center;
    background-color: rgb(247, 247, 247);
    img {
      width: 50px;
      height: 50px;
      padding-top: 5px;
    }
    p {
      margin: 0;
    }
  }
  .wx14 {
    height: 50px;
    img {
      width: 100%;
      height: 50px;
    }
  }
  .wx2 {
    height: 100px;
    margin-top: 5px;
    padding: 0 5px;
    img {
      width: 50%;
      height: 100px;
      float: left;
    }
  }
  .wx3 {
    height: 50px;
    padding: 0 5px;
    img {
      width: 100%;
      height: 50px;
    }
  }
  .hb {
    height: 80px;
    img {
      width: 100%;
      height: 80px;
    }
  }
  .tuijian {
    width: 100%;
    height: 40px;
    background-color: rgb(247, 247, 247);
    text-align: center;
    line-height: 40px;
    p {
      font-size: 16px;
      color: rgb(119, 119, 118);
    }
  }
  .choose {
    .mui-content {
      background-color: rgb(247, 247, 247);
      .mui-row {
        width: 100%;
        height: 40px;
        div {
          text-align: center;
          line-height: 40px;
          font-size: 16px;
          color: rgb(119, 119, 119);
          .glyphicon-tasks {
            font-size: 12px;
          }
        }
      }
    }
  }
  .store {
    background-color: rgb(250, 250, 250);
    .store1 {
      height: 155px;
      border-bottom: 1px solid rgb(219, 219, 219);
      .storeleft {
        width: 26%;
        height: 150px;
        float: left;
        img {
          width: 80px;
          height: 80px;
          border: 1px solid #ccc;
          margin: 10px 5px;
        }
      }
      .storeright {
        width: 70%;
        float: left;
        height: 15px;
        .right {
          margin: 10px 0;
        }
        .name {
          font-size: 15px;
          font-weight: bold;
          color: rgb(85, 84, 84);
        }
        .money {
          font-size: 12px;
          color: rgb(121, 120, 120);
          .min{
            float: right;
          }
        }
        .bottom {
          // height: 40px;

          div {
            float: left;
            font-size: 13px;
            color: rgb(105, 105, 105);
            border: 1px solid #ccc;
            margin-right: 10px;
            padding: 0 5px;
          }
          .aa {
            background-color: rgb(247, 94, 94);
            color: #fff;
          }
        }
        hr{
          margin: 7px 0;
        }
        .bom{
          .man{
           font-size: 12px;
           color: rgb(121, 120, 120);
          }
          .hy{
            font-size: 12px;
           color: rgb(121, 120, 120);
            span{
              color: rgb(245, 220, 82);
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>
