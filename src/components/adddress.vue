<template>
  <div class="ad">
    <div class="addaddress">
      <div class="xxa">
        <div class="v">姓名</div>
        <div style="float:left;">
          <input type="text"  v-model="name" id="name" placeholder="收货人姓名">
        </div>
      </div>
      <div class="xxa">
        <div class="v">电话</div>
        <div style="float:left;">
        <input type="text" v-model="phone" id="phone" placeholder="收货人手机号">
        </div>
      </div>
      <div class="xxa">
        <div class="v">详细地址</div>
        <div style="float:left;">
        <input type="text" v-model="address" id="address" placeholder="收货地址">
        </div>
      </div>
      <div class="xxa">
        <div class="v">邮政编码</div>
        <div style="float:left;">
        <input type="text" v-model="num" id="num" placeholder="邮政编码">
        </div>
      </div>
      <div style="text-align: center;">
        <mt-button @click="baocun" type="danger" style="width:80%; margin-bottom:10px;">保存</mt-button>
        <mt-button type="default" style="width:80%;margin-bottom:10px;">取消</mt-button>
      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:"",
      phone:"",
      address:"",
      num:"",
      dizhi:[]
     
    };
  },

  methods: {
   baocun(){
     this.$store.commit("infoaddress",{name:this.name,phone:this.phone,address:this.address,num:this.num});
     this.name="";
     this.phone="";
     this.address="";
     this.num="";
     this.$store.state.addressshow=false;
   }
  }
};
</script>

<style lang="scss">
.ad{
  margin-top: 10px;
  .addaddress{
    width: 100%;
    .xxa{
      width: 100%;
      height: 70px;
      line-height: 70px;
      .v{
        width: 20%;
        text-align: center;
        float: left;
      }
      .input{
        width: 80%;
        float: left;
      }
    }
    mt-button{
      width: 80%;
      text-align: center
    }
  }
}
  
</style>
