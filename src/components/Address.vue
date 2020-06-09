<template>
  <div>
    
    <div >
    <div>
      <!-- <mt-header fixed title="选择地址">
          
        <mt-button icon="back"  slot="left" @click="show"></mt-button>
        <mt-button icon="back" slot="right" style="font-size:14px;" @click="showdaddress=!showdaddress">新增地址</mt-button>
      </mt-header> -->

      <mt-header fixed title="商品详情">
      <router-link to="/home" slot="left">

        <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button  slot="right" style="font-size:14px;" @click="addshow">新增地址</mt-button>
      
    </mt-header>
    </div>
    
    <div class="zz">
      <adddress v-show="this.$store.state.addressshow"></adddress>
      <div  v-show="!this.$store.state.addressshow">
        <div class="search2">
        
            <div class="dre" @click="dress=!dress">广州 <span class="glyphicon glyphicon-triangle-bottom" style="font-size:10px;"></span></div>
            <input type="search" class="txt" placeholder="搜索城市">
        
      </div>
    <div v-show="dress">
      <van-tree-select 
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @navclick="onNavClick"
        @itemclick="onItemClick"
        @click="getvalue(value)"
      />
    </div>

    <div class="dz">
        <div class="dqdz">
            当前地址
        </div>
        <div class="dd">
            粤嵌众创空间
        </div>
    </div>

    <div class="shdz">
      
        <div class="shdz2">收货地址</div>
        <div class="xx">
            <div class="xxx">XXX <span>12345678910</span></div>
            <div class="x">粤嵌众创空间</div>
            
        </div>
        <div class="xx" v-for="(item,i) in this.$store.state.address" :key="i">
            <div class="xxx">{{item.name}} <span>{{item.phone}}</span></div>
            <div class="x">{{item.address}}</div>
        </div>
        
    </div>

    

    </div>
    </div>
    </div>
  </div>
</template>

<script>
import adddress from "./adddress"
export default {
  data() {
    return {
        dress:false,
        // showdaddress:false,
      items: [
        {
          // 导航名称
          text: ["所有城市"],
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "杭州",
              id: 2
            },
            {
              text: "广州",
              id: 3
            },
            {
              text: "深圳",
              id: 4
            },
            {
              text: "重庆",
              id: 5
            },
            {
              text: "桂林",
              id: 6
            },
            {
              text: "北京",
              id: 7
            },
            {
              text: "上海",
              id: 8
            }
          ]
        },
        {
          // 导航名称
          text: "广东",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "东莞",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "深圳",
              id: 2
            },
            {
              text: "中山",
              id: 3
            },
            {
              text: "江门",
              id: 4
            },
            {
              text: "肇庆",
              id: 5
            },
            {
              text: "汕头",
              id: 6
            },
            {
              text: "潮州",
              id: 7
            }
          ]
        },
        {
          // 导航名称
          text: "湖南",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "长沙",
              // id，作为匹配选中状态的标识
              id: 1,
              // 禁用选项
              disabled: true
            },
            {
              text: "衡阳",
              id: 2
            },
            {
              text: "中山",
              id: 3
            },
            {
              text: "江门",
              id: 4
            },
            {
              text: "肇庆",
              id: 5
            },
            {
              text: "汕头",
              id: 6
            },
            {
              text: "潮州",
              id: 7
            }
          ]
        }
      ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1,
      
    };
  },
  methods: {
    getvalue(value){
      console.log(value)
    },
      show(){
          this.$store.state.flag=true;
      },
      addshow(){
        console.log("xg")
        this.$store.state.addressshow=true;
        console.log(this.$store.state.addressshow)
      },
      // showdress(){
      //     this.showdaddress=flase;
      // },
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  },
  components:{
    adddress
  }
};
</script>

<style lang="scss">
.van-tree-select__selected{
    left: 170px;
}
    .zz {
    padding-top: 40px;
    .search2{
        background-color:rgb(253, 253, 253);
        height: 50px;
        line-height: 55px;
        .dre{
            margin-left: 5px;
            width: 50px;
            font-size: 13px;
            height: 30px;
            float: left;
            text-align: center;
            line-height: 55px;
        }
        .txt{
            width: 80%;

        }
    }
    .dz{
        .dqdz{
            width: 100%;
            height: 30px;
            font-size: 13px;
            color: rgb(77, 76, 76);
            padding: 5px;
        }
        .dd{
            width: 100%;
            height: 32px;
            font-size: 14px;
            font-weight: bold;
            line-height: 32px;
            color: rgb(68, 68, 68);
            padding: 0 5px;
            background-color: rgb(253, 253, 253);
        }
    }
    .shdz{
        .shdz2{
            width: 100%;
            height: 30px;
            font-size: 13px;
            color: rgb(77, 76, 76);
            padding: 5px;
        }
        .xx{
            width: 100%;
            height: 50px;
            background-color: rgb(253, 253, 253);
            border-bottom: 1px solid rgb(226, 226, 226);
            .xxx{
                font-size: 14px;
                color: rgb(92, 91, 91);
                padding-left: 10px;
                padding-top: 3px;
                span{
                   font-size: 12px;
                   color: rgb(139, 139, 139);
                }
            }
            .x{
                font-size: 14px;
                color: rgb(112, 112, 112);
                padding: 0 5px 5px 10px;
                
            }
        }
    }
  }
</style>
