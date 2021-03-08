<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe60e;</span>
    111111111111111111111111111111111111111111111111111111111111
    <span class="iconfont position__notice">&#xe60a;</span>
  </div>

  <div class="search">
    <span class="iconfont">&#xe602;</span>
    <span class="search search__text">山姆会员商店优惠商品 </span>
  </div>

  <div class="banner">
    <img
      class="banner__img"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
    />
  </div>

  <div class="icons">
    <div class="icons__item"
         v-for="(item,index) in iconList"
         :key="index"
    >
      <img
        class="icons__item__img"
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
      />
      <p class="icons__item__text">{{item.title}}</p>
    </div>










  </div>

  <div class="gap"></div>
</template>

<script>
export default {
  name:'StaticPart',
  setup(){
    const iconList = [
      {imgName:'超市', title:'超市便利'},
      {imgName:'菜市场', title:'菜市场'},
      {imgName:'水果店', title:'水果店'},
      {imgName:'鲜花', title:'鲜花绿植'},
      {imgName:'医药健康', title:'医药健康'},
      {imgName:'家居', title:'家居时尚'},
      {imgName:'蛋糕', title:'烘培蛋糕'},
      {imgName:'签到', title:'签到'},
      {imgName:'大牌免运', title:'大牌免运'},
      {imgName:'红包', title:'红包套餐'},
      ];

    return {
      iconList
    }
  }
};
</script>

<style  scoped lang="scss">
@import "../../style/viriables.scss";
@import "../../style/mixins.scss";
.position {
  position: relative;
  padding: 0.16rem 0.24rem 0.16rem 0;
  line-height: 0.22rem;
  font-size: 0.16rem;
  @include ellipsis;
  .position__icon {
    font-size: 0.2rem;
    position: relative;
    top: 0.01rem;
  }
  .position__notice {
    position: absolute;
    font-size: 0.2rem;
    right: 0;
    top: 0.17rem;
  }
  color: $content-fontcolor;
}
.search {
  line-height: 0.32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: 0.16rem;

  .iconfont {
    position: relative;
    top: 0.03rem;
    padding: 0 0.12rem 0 0.16rem;
    display: inline-block;
    font-size: 0.2rem;
  }
  &__text {
    display: inline-block;
    font-size: 0.14rem;
  }
}

.banner {
  margin-top: 0.12rem;
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}

.icons {
  margin-top: 0.16rem;
  display: flex;
  flex-wrap: wrap;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }

    &__text {
      margin: 0.06rem 0 0.06rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  height: 0.1rem;
  background: $content-bgColor;
  margin: 0 -0.18rem;
}
</style>