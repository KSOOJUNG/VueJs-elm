<template>
  <div class="found">
    <mt-header fixed title="饿了吗">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="zz">
      <div class="txt">
        ——
        <span class="glyphicon glyphicon-thumbs-up"></span>为你推荐 ——
      </div>

      <div class="mui-content">
        <div class="mui-row">
          <div class="mui-col-sm-6 mui-col-xs-6" v-for="(item,i) in stores" :key="i" >
            <router-link to="/food">
            <div @click="xq(i)">
              <div class="a">
                <div class="img">
                  <img :src="item.image" alt>
                </div>
                <div class="b">
                  <p>{{item.name}}</p>
                  <div class="bbb">月售2份 好评率23%</div>
                  <div class="bb">
                    ￥30.0
                    <span>慢25减18</span>
                  </div>
                  <div class="br"></div>
                  <div class="bbbb">
                    <span class="iconfont icon-list-space"></span>粥品香坊（回龙观）
                  </div>
                </div>
              </div>
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </div>
    <!-- <Foods v-show="!show"></Foods> -->
  </div>
</template>

<script>
import Foods from "./Foods.vue"
export default {
  data: function() {
    return {
      
      name: "",
      content: "",
      stores:[]
    };
  },
  methods: {
    
    // add() {
    //   this.list.push({ name: this.name, content: this.content });
    //   this.name = this.content = "";
    // },
    getdata(){
      var _this = this;
      // store=[];
      return new Promise(function(resolve,reject){
        _this.axios.get("http://127.0.0.1:3000/api/goods").then(function(res){
          // var thisa=_this;
             console.log(res.data.data[0].foods[0].name);
             for(var i=0; i<res.data.data.length;i++){
               for(var k=0; k<res.data.data[i].foods.length;k++){
                _this.stores.push(res.data.data[i].foods[k]);
                // console.log(res.data.data[i].foods[k]);
             }
             }
            resolve(_this.stores);
         }).catch(function (error) {
             console.log(error);
         });
      })
    },
    xq(i){
      console.log("-------foodId-------")
      // console.log(i);
      this.$store.state.foodId=i;
      console.log(this.$store.state.foodId)
    }
  },
  components:{
    Foods
  },
  async created(){
    this.stores = await this.getdata();
    // console.log(this.stores);
  },
};
</script>

<style lang="scss">
.found {
  background-color: rgb(253, 253, 253);
  .zz {
    padding-top: 40px;
  }
  .txt {
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(100, 100, 100);
    text-align: center;
    line-height: 50px;
  }
  .mui-content {
    background-color: rgb(253, 253, 253);
    .a {
      border: 2px solid #ccc;
      margin: 5px;
      img {
        width: 100%;
        height: 180px;
      }
    }
    .b {
      p {
        font-size: 14px;
        font-weight: bold;
        color: rgb(102, 101, 101);
        padding: 2px 5px;
        margin: 0;
      }
      .bbb {
        font-size: 12px;
        color: rgb(138, 138, 138);
        padding: 0 5px;
      }
      .bb {
        font-size: 16px;
        font-weight: bold;
        color: rgb(245, 126, 14);
        padding: 0 5px;
        span {
          font-size: 10px;
          border: 1px solid red;
          color: red;
          padding: 0 5px;
        }
      }
      .br {
        width: 130px;
        height: 1px;
        border-bottom: 1px dashed #ccc;
        margin: 3px 15px;
      }
      .bbbb {
        font-size: 12px;
        color: rgb(138, 137, 137);
        padding: 0 5px;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
