<template>
  <div>
    <mt-header fixed title="商品详情">
      <router-link to="/found" slot="left">

        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!-- <mt-header fixed title="商品详情">
          
        <mt-button icon="back"  slot="left" @click="show"></mt-button>
      
        <mt-button slot="right" style="font-size:14px;"></mt-button>
      </mt-header> -->

    <div class="zz">
      <div class="food" v-for="(item,i) in foodlist" :key="i">
        <div class="img">
          <img :src="item.image" alt>
        </div>
        <p class="name">{{item.name}}</p>
        <div class="ys">月售2份 好评率23%</div>
        <div class="pro">
          ￥{{ item.price }}
          <span>满25减18</span>
          
        </div>
        <p class="text">粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      stores:[],
      foodlist:[]
    };
  },
  methods:{
    show(){
          this.$store.state.foodshow=true;
      },
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
    getfoodId(){
      // console.log(this.$stores.state.foodId);
      for(var i=0; i<this.stores.length;i++){
        // var _this=this;
        if(this.$store.state.foodId==i){
          this.foodlist.push(this.stores[i]);
          console.log(this.stores[i]);
          console.log(this.foodlist);
        }
      }
    }
  },
  async created(){
    this.stores = await this.getdata();
    await this.getfoodId();
    // console.log(this.foodlist);
  }
};
</script>

<style lang="scss" >
.zz {
  padding-top: 40px;
}
.food {
  .img {
    img {
      width: 100%;
    }
  }
  .name {
    font-size: 22px;
    font-weight: bold;
    color: rgb(78, 78, 78);
    margin: 8px;
  }
  .ys {
    font-size: 14px;
    color: rgb(148, 147, 147);
    margin: 8px 0 3px 8px;
  }
  .pro {
    margin: 0 0 0 8px;
    font-size: 18px;
    color: rgb(243, 125, 28);
    span {
      font-size: 13px;
      border: 1px solid red;
      color: red;
      padding: 0 3px;
    }
    .sl{
      float: right;
    }
  }
  .text {
    font-size: 14px;
    color: rgb(122, 122, 122);
    margin: 0 0 0 8px;
  }
  
}
</style>