<template>
  <div id="app">
     <!-- 顶部导航 -->
    <!-- <mt-header fixed title="饿了么"></mt-header> -->
    <div class="top">

      <!-- 内容区域 -->
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <!-- 底部导航 -->
    <div class="mint-tabbar is-fixed ">
      <router-link to="/home" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-list-space" ></span></div>
        <div class="mint-tab-item-label">首页</div>
      </router-link>
      <router-link to="/found" class="mint-tab-item">
        <div class="mint-tab-item-icon">
         <span class="iconfont icon-list-see"></span></div>
        <div class="mint-tab-item-label">发现</div>
      </router-link>
      <router-link to="/order" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-ico-jrddzs"></span></div>
        <div class="mint-tab-item-label">订单</div>
      </router-link>
      <router-link to="/main" class="mint-tab-item">
        <div class="mint-tab-item-icon">
          <span class="iconfont icon-topbar-data"></span></div>
        <div class="mint-tab-item-label">我的</div>
      </router-link>
    </div>
    
  </div>
</template>


<style lang="scss">
.top{
  // padding-top: 40px;
  padding-bottom: 55px;
  overflow: hidden;
}
.mint-tab-item:hover{
  text-decoration: none;
}
.mint-tab-item{
  color:#818181;
}
.mint-tab-item.is-selected{
  color: #0099ff;
}

.v-leave-to,
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}

</style>
