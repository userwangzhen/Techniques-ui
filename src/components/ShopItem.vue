<template>
  <div class="shop__item">
    <img :src="shop.imgUrl" class="shop__item__img" />
    <div :class="{'shop__item__content':true, 'shop__item__content--border':hideBorder?false:true}">
      <div class="shop__item__content__title">{{ shop.name }}</div>
      <div class="shop__item__content__tags">
        <span class="shop__item__content__tags__tag"
          >月售: {{ shop.sales }}
        </span>
        <span class="shop__item__content__tags__tag"
          >起送: {{ shop.expressLimit }}
        </span>
        <span class="shop__item__content__tags__tag"
          >基础运费: {{ shop.expressPrice }}
        </span>
      </div>
      <p class="shop__item__content__highlight">{{ shop.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopItem",
  props: ["shop", "hideBorder"],
};
</script>


<style lang="scss">
@import "../style/viriables.scss";
.shop__item {
  padding-top: 0.12rem;
  display: flex;

  &__img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  &__content {
    flex: 1;
    padding-bottom: 0.12rem;
    &--border {
      border-bottom: 0.01rem solid $content-bgColor;
    }

    &__title {
      line-height: 0.22rem;
      font-size: 0.16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: 0.08rem;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: $content-fontcolor;
      &__tag {
        margin-right: 0.16rem;
      }
    }

    &__highlight {
      margin: 0.08rem 0 0 0;
      line-height: 0.18rem;
      font-size: 0.13rem;
      color: #e93b3b;
    }
  }
}
</style>