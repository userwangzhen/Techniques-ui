<template>
  <div class="docker">
    <div 
    :class="{'docker__item':true, 'docker__item--active':index===selectIndex}" 
    v-for="(item ,index) in dockerList" 
    :key="index"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">{{item.title}}</div>
    </div>
    <!-- <div class="docker__item">
      <div class="iconfont">&#xe601;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe600;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7e9;</div>
      <div class="docker__title">我的</div>
    </div> -->
  </div>
</template>
<script>
//import { toRef } from 'vue' 
export default {
  name: "Docker",
  setup() {
      let selectIndex=0;
    const dockerList = [
      { icon: '&#xe89c;', title: "首页" },
      { icon: '&#xe601;', title: "购物车" },
      { icon: '&#xe600;', title: "订单" },
      { icon: '&#xe7e9;', title: "我的" }
    ];

    return {
      dockerList,
      selectIndex
    };
  },
};
</script>

<style lang="scss">
@import "../../style/viriables.scss";
.docker {
  box-sizing: border-box;
  padding: 0 0.18rem;
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  &__title {
    font-size: 0.2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
  &__item {
    flex: 1;
    text-align: center;
    &--active {
      color: #1fa4fc;
    }
    .iconfont {
      font-size: 0.18rem; //顺时针
      margin: 0.07rem 0 0.02rem 0;
    }
  }
  color: $content-fontcolor;
}
</style>