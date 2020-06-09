<template>
  <div class="dianpin">
    <div class="dptop">
      <ul>
        <li style="width:23%;line-height:60px;font-size:30px;color:rgb(247, 172, 35);">3.9</li>
        <li style="width:25%;">
          <div class="s">商家评价</div>
          <van-rate :size="13" v-model="value" allow-half void-icon="star" void-color="#eee"/>
        </li>
        <li style="width:16%;">
          <div class="s">味道</div>
          <div class="ss">3.9</div>
        </li>
        <li style="width:18%;">
          <div class="s">包装</div>
          <div class="ss">4.0</div>
        </li>
        <li style="width:18%;border-left:1px solid #ccc;">
          <div class="s">配送</div>
          <div class="ss">4.0</div>
        </li>
      </ul>
    </div>
    <div class="bb">
      <ul>
        <li>
          <van-tag round type="primary" style="font-size:13px;">全部</van-tag>
        </li>
        <li>
          <van-tag round type="primary" style="font-size:13px;">有图</van-tag>
        </li>
        <li>
          <van-tag round type="primary" style="font-size:13px;">好评</van-tag>
        </li>
        <li>
          <van-tag round type="primary" style="font-size:13px;">差评</van-tag>
        </li>
      </ul>
    </div>
    <hr style="margin:0px auto;width:90%;">
    <div class="ck">
        <span class="glyphicon glyphicon-ok-sign" style="color: green;"></span>
        只看有内容的评价
    </div>
    <hr style="margin:0px auto;width:90%;">
    <div class="pja">
      <div class="pjtxt" v-for="(item,i) in ratings" :key="i">
        <div class="left">
          <img class="tx" :src="item.avatar" alt="">
        </div>
        <div class="right">
            <div class="mz">{{item.username}}</div>
            <van-rate :size="10" v-model="value" allow-half void-icon="star" void-color="#eee"/>
            <div style="font-size:14px;color:rgb(134, 134, 134);">{{item.text}}</div>
            <div class="t">
                <div>
                    <!-- <img src="../assets/img/list1.webp" alt=""> -->
                </div>
            </div>
        </div>
        <hr style="margin:0px auto;width:90%;">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2.5,
      ratings:[]
    };
  },
  methods:{
    getdata(){
      var _this = this;
      // store=[];
      return new Promise(function(resolve,reject){
        _this.axios.get("http://127.0.0.1:3000/api/ratings").then(function(res){
          // var thisa=_this;
          for(var i=0;i<res.data.data.length;i++){
            _this.ratings.push(res.data.data[i])
          }
             console.log(res.data.data[i]);
             
            resolve(_this.ratings);
         }).catch(function (error) {
             console.log(error);
         });
      })
    },
  },
  async created(){
    this.ratings = await this.getdata();
    console.log(this.ratings);
  },
};
</script>

<style lang="scss">
.dianpin {
  .dptop {
    height: 70px;
    ul {
      border-bottom: 1px solid #ccc;
      height: 70px;
      li {
        margin-top: 5px;
        float: left;
        height: 60px;
        text-align: center;
        .s {
          font-size: 13px;
          color: rgb(92, 92, 92);
          margin-top: 10px;
        }
        .ss {
          font-size: 21px;
          color: rgb(85, 85, 85);
        }
      }
    }
  }
  .bb {
    height: 40px;
    // border-bottom: 1px solid #ccc;
    ul {
      height: 40px;
      li {
        line-height: 40px;
        font-size: 13px;
        float: left;
        padding: 0 5px;
      }
    }
  }
  .ck{
      height: 30px;
      padding-left: 10px;
      font-size: 14px;
      line-height: 30px;
      color: rgb(134, 134, 134);
  }
  .pja {
    margin-top: 10px;
    
  .pjtxt {
        height: 140px;
        margin-bottom: 10px;
    .left {
        width: 15%;
        height: 140px;
        float: left;
        .tx{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin: 0 10px;
            background-color: antiquewhite;
        }
    }
    .right{
        width: 85%;
        .mz{
            font-size: 13px;
            height: 15px;
        }
        .t{
            img{
                width: 100px;
                height: 50px;
            }
        }
    }
  }
}
}

</style>