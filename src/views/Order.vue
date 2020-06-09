<template>
<div>
    <mt-header fixed title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div class="zz">
    <ul class="mui-table-view" style="margin-top:10px;">
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/img/list3.webp">
            <div class="mui-media-body">
                幸福便当
                <p class="state">订单已发送</p>
                <p class='mui-ellipsis'>2019-06-15 20:21</p>
            </div>
            <hr style="margin:10px; margin-left:50px;">
            <div class="foods">手撕鸡饭 <p>￥10.70</p></div>
            <div class="again">
                <p>
                    再来一单
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/img/list1.webp">
            <div class="mui-media-body">
                木屋
                <p class="state">订单已完成</p>
                <p class='mui-ellipsis'>2019-06-16 11:23</p>
            </div>
            <hr style="margin:10px; margin-left:50px;">
            <div class="foods">手撕鸡饭+青菜 <p>￥15.70</p></div>
            <div class="again">
                <p>
                    再来一单
                </p>
            </div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" src="../assets/img/list2.webp">
            <div class="mui-media-body">
                CBD
                <p class="state">订单已完成</p>
                <p class='mui-ellipsis'>2019-05-14 11:19</p>
            </div>
            <hr style="margin:10px; margin-left:50px;">
            <div class="foods">手撕鸡饭 <p>￥14.70</p></div>
            <div class="again">
                <p>
                    再来一单
                </p>
            </div>
        </a>
    </li>
</ul>
</div>
</div>
</template>
<style lang="scss">
.zz{
    padding-top: 40px;

.mui-table-view-cell{
    .state{
        float: right;
    }
    .foods{
        font-size: 14px;
        color: #ccc;
        margin-left: 50px;
        p{
            float: right;
            font-weight: bold;
            color: rgb(121, 120, 120);
        }
    }
    .again{
        p{
            margin-top: 5px;
            display: block;
            float: right;
            border: 1px solid #26a2ff;
            color: #26a2ff;
            padding: 0 5px;
        }
    }
}
}
</style>