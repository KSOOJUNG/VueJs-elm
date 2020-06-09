<template>
  <div>
      <div class="shangjia">
    <div class="psxx">
      <div class="ps">配送信息</div>
      <div class="tt">由峰鸟快送配送，约38分钟送达，距离4.2km</div>
      <div style="font-size: 13px;color: rgb(116, 116, 116);">
        配送费￥0.5
      </div>
    </div>

    <div class="psxx">
        <div class="ps">商家服务</div>
        <van-tag plain style="float:left;margin-right:5px;margin-top:3px;">保</van-tag><div class="tt">坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。</div>
    </div>

    <div class="sjsj">
        <div class="ps">商店实景</div>
      <img src="http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180" alt>
      <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" alt>
      <img src="http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180" alt>
    </div>

    <div class="sjxx">
        <div class="ps">商家信息</div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell">
          <a >
            品类
            <span>快餐，茶餐厅</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            商家电话
            <span>12345678910</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            地址
            <span>北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340</span>
          </a>
        </li>
        <li class="mui-table-view-cell">
          <a>
            营业时间
            <span>10:00-20:30</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
    .shangjia{
        .psxx{
            background-color: rgb(255, 255, 255);
            margin: 10px;
            .ps{
                font-size: 15px;
                font-weight: bold;
                color: rgb(87, 86, 86);
            }
            .tt{
                font-size: 13px;
                color: rgb(116, 116, 116);
            }
        }
        .sjsj{
            margin: 10px;
            .ps{
                font-size: 15px;
                font-weight: bold;
                color: rgb(87, 86, 86);
            }
            img{
                margin-right: 10px;
                width: 80px;
                height: 80px;
            }
        }
        .sjxx{
            .ps{
                margin: 5px 10px;
                font-size: 15px;
                font-weight: bold;
                color: rgb(87, 86, 86);
            }
            ul{
                li{
                    padding: 9px 15px;
                    a{
                        font-size: 13px;
                        color: rgb(92, 91, 91);
                        span{
                            float: right;
                            font-size: 12px;
                        }
                    }
                }
            }
        }
    }
</style>